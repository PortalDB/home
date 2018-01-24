export const centrality1 =
`import java.sql.Date
import java.time.{LocalDate, Period}
import java.time.temporal.ChronoUnit

import edu.drexel.cs.dbgroup.portal._
import edu.drexel.cs.dbgroup.portal.representations.VEGraph
import edu.drexel.cs.dbgroup.portal.util.GraphLoader
import org.apache.log4j.{Level, Logger}
import org.apache.spark.graphx.{TripletFields, VertexId}
import org.apache.spark.rdd.RDD
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.types.{StructField, _}
import org.apache.spark.sql.{Row, SQLContext}
import org.apache.spark.{SparkConf, SparkContext}
import edu.drexel.cs.dbgroup.portal.ProgramContext

ProgramContext.setContext(sc)

val schema = StructType(
  StructField("Start", DateType, false) ::
  StructField("End", DateType, false) ::
  StructField("GraphCentrality", DecimalType(DecimalType.MAX_PRECISION, DecimalType.MAX_SCALE), false) :: Nil
)

val dblp: VEGraph[String, Any] = GraphLoader
  .buildVE("file:///zeppelin/dblp", 1, 1, Interval(LocalDate.MIN, LocalDate.parse("1970-01-01")))
  .asInstanceOf[VEGraph[String,Any]]

// calculate the degree of each vertex at every point in time
val degrees: VEGraph[Int, Any] =
  dblp
    .aggregateMessages(
      triplet => Iterator((triplet.srcId, 1), (triplet.dstId, 1)),
      (a: Int,b: Int) => a + b,
      0,
      TripletFields.None
    )
    .vmap((_,_,attr) => attr._2, 0)`

export const centrality2 =
`val initializeMaxAndCount: VEGraph[(Int,Int,Int), Any] =
      degrees.vmap((_, _, degree) => (degree, degree, 1), (0,0,1))`

export const centrality3 =
`val vertexAggregationFunction: ((Int, Int, Int), (Int, Int, Int)) => (Int, Int, Int) = {
  case ((degree1, max1, count1),(degree2,max2,count2)) => (
    degree1 + degree2,
    Math.max(max1,max2),
    count1 + count2
  )
}
val vertexGroupByFunction: (VertexId, (Int, Int, Int)) => VertexId = (_, _) => 0

val structurallyAggregated: VEGraph[(Int, Int, Int), Any] = initializeMaxAndCount.createAttributeNodes(vertexAggregationFunction)(vertexGroupByFunction)`

export const centrality4 =
`val graphCentralityCalculation: VEGraph[BigDecimal, Any] = structurallyAggregated.vmap(
  { case (_, _, (totalDegree, maxDegree, vertexCount)) => BigDecimal(
    ((vertexCount * maxDegree) - totalDegree).toDouble / ((vertexCount - 1)*(vertexCount - 2)).toDouble)},
  0)`