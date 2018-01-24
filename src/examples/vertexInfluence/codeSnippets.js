export const lifetimeDegrees =
`import java.sql.Date
import java.time.LocalDate

import edu.drexel.cs.dbgroup.portal.representations.VEGraph
import edu.drexel.cs.dbgroup.portal.util.GraphLoader
import edu.drexel.cs.dbgroup.portal.{Exists, Interval, Resolution, TimeSpec}
import org.apache.spark.graphx.TripletFields
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.{DataFrame, Row}
import org.apache.spark.sql.types._

val dblp = GraphLoader.buildVE("file:///zeppelin/dblp",1,1,Interval(LocalDate.parse("1985-01-01"), LocalDate.MAX))

val schema = StructType(
  StructField("VID", LongType, false) ::
  StructField("Start", DateType, false) ::
  StructField("End", DateType, false) ::
  StructField("Name", StringType, false) ::
  StructField("Degree", IntegerType, false) :: Nil
)

val lifetimeDegrees =
  dblp
    .createTemporalNodes(
      TimeSpec(Resolution.between(dblp.span.start, dblp.span.end)),
      Exists(),
      Exists(),
      (v1, _) => v1,
      (e1, _) => e1
    )
    .aggregateMessages(
      triplet => Iterator((triplet.srcId, 1), (triplet.dstId, 1)),
      (a: Int,b: Int) => a + b,
      0,
      TripletFields.None
    )
    .asInstanceOf[VEGraph[(String, Int), Any]]
    .vertices
    .map{case (vid, (interval, (name, degree))) => Row(vid, Date.valueOf(interval.start), Date.valueOf(interval.end), name, degree)}

val df: DataFrame = sqlContext.createDataFrame(lifetimeDegrees,schema)

import org.apache.spark.sql.functions._

val w = Window.orderBy(col("Degree").desc)

val withRow = df.withColumn("rank", row_number().over(w)).limit(5)

val topAuthorRDD = withRow.select("VID").rdd.map(r => r(0))`;

export const influenceOverTime =
`import java.sql.Date
import java.time.LocalDate

import edu.drexel.cs.dbgroup.temporalgraph.representations.VEGraph
import edu.drexel.cs.dbgroup.temporalgraph.util.GraphLoader
import edu.drexel.cs.dbgroup.temporalgraph.{Interval, ProgramContext}
import org.apache.log4j.{Level, Logger}
import org.apache.spark.graphx.TripletFields
import org.apache.spark.sql.types._
import org.apache.spark.sql.{Row, SQLContext}

ProgramContext.setContext(sc)

val schema = StructType(
  StructField("Name", StringType, false) ::
  StructField("Year", DateType, false) ::
  StructField("Collaborations", IntegerType, false) :: Nil
)

val topAuthorVids = Set(31299L, 25939L, 8676L, 27953L, 7766L)

val aggEdges =
  dblp
    .esubgraph({ triplet => topAuthorVids.contains(triplet.srcId) || topAuthorVids.contains(triplet.dstId) })
    .aggregateMessages(
      triplet => {
        val srcCount = if (topAuthorVids.contains(triplet.srcId)) 1 else 0
        val dstcount = if (topAuthorVids.contains(triplet.dstId)) 1 else 0
        Iterator((triplet.srcId, srcCount), (triplet.dstId, dstcount))
      },
      (a: Int,b: Int) => a + b,
      0,
      TripletFields.None
)


val lifetimeDegrees =
  aggEdges
    .vertices.filter(v => topAuthorVids.contains(v._1))
    .map { case (vid, (interval, (name, degree))) => Row(name, Date.valueOf(interval.start), degree) }


val frames = sqlContext.createDataFrame(lifetimeDegrees, schema).sort("Year")`