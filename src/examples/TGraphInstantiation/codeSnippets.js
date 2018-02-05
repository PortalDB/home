

export const emptyGraph =
`import edu.drexel.cs.dbgroup.portal.ProgramContext
import edu.drexel.cs.dbgroup.portal.representations.VEGraph

ProgramContext.setContext(sc)

val emptyVEGraph = VEGraph.emptyGraph("Default")`;


export const fromRDDs =
`import java.time.LocalDate

import edu.drexel.cs.dbgroup.portal.{Interval, TEdge}
import edu.drexel.cs.dbgroup.portal.representations.VEGraph
import org.apache.spark.graphx._
import org.apache.spark.rdd.RDD
import org.apache.spark.storage.StorageLevel

val users: RDD[(VertexId, (Interval, String))] = sc.parallelize(Array(
  (1L, (Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2014-01-01")), "Bob")),
  (2L, (Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2013-01-01")), "Barbara")),
  (3L, (Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2015-01-01")), "Clyde")),
  (4L, (Interval(LocalDate.parse("2011-01-01"), LocalDate.parse("2014-01-01")), "Debbie")),
  (5L, (Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2014-01-01")), "Edward"))
))

val friendships: RDD[(TEdge[Int])] = sc.parallelize(Array(
  TEdge[Int](1L, 1L, 2L, Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2013-01-01")), 1),
  TEdge[Int](2L, 2L, 3L, Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2013-01-01")), 1),
  TEdge[Int](3L, 3L, 4L, Interval(LocalDate.parse("2011-01-01"), LocalDate.parse("2012-01-01")), 1),
  TEdge[Int](4L, 4L, 5L, Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2014-01-01")), 1),
  TEdge[Int](5L, 2L, 5L, Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2013-01-01")), 1)
))

val VEG = VEGraph.fromRDDs(users,friendships, "Default", StorageLevel.MEMORY_ONLY_SER)`;

export const fromDataFrames = 
`import java.sql.Date

import org.apache.spark.sql.DataFrame
import sqlContext.implicits._

/*
 * the vertex DataFrames should be in a format that includes a vertex ID, start and end interval dates, plus any properties to associat with the vertex
 */
case class VertexDF(vid: Long, start: java.sql.Date, end: java.sql.Date, name: String)
/*
 * the edge DataFrames should be in a similar format, with unique ID's representing each edge as well, since TGraph's are multigraphs
 */
case class EdgeDF(eid: Long, vid1: Long, vid2: Long, start: java.sql.Date, end: java.sql.Date, count: Int)

val vertexDfs: DataFrame = users.map{
  case (vertexId, (interval, attribute)) =>
    VertexDF(
      vertexId,
      Date.valueOf(interval.start),
      Date.valueOf(interval.end),
      attribute
    )
}.toDF()

val edgeDfs: DataFrame = friendships.map{
  friendship =>
    EdgeDF(
      friendship.eId,
      friendship.srcId,
      friendship.dstId,
      Date.valueOf(friendship.interval.start),
      Date.valueOf(friendship.interval.end),
      friendship.attr
    )
}.toDF()

val veGraphFromDataFrames = VEGraph.fromDataFrames(vertexDfs, edgeDfs, "Default")`;


export const fromParquet = 
`import scala.reflect.io.Directory
import scala.reflect.io.Path
import edu.drexel.cs.dbgroup.portal.{Interval, ProgramContext, TEdge}
import org.apache.spark.graphx.VertexId
import org.apache.spark.rdd.RDD
import org.apache.spark.sql.DataFrame
import edu.drexel.cs.dbgroup.portal.util.GraphLoader

ProgramContext.setContext(sc)

val parquetPath: Path = Path("file:///zeppelin/parquet")
val directory = Directory(parquetPath)

directory.deleteRecursively()

val users: RDD[(VertexId, (Interval, String))] = sc.parallelize(Array(
  (1L, (Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2014-01-01")), "Bob")),
  (2L, (Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2013-01-01")), "Barbara")),
  (3L, (Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2015-01-01")), "Clyde")),
  (4L, (Interval(LocalDate.parse("2011-01-01"), LocalDate.parse("2014-01-01")), "Debbie")),
  (5L, (Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2014-01-01")), "Edward"))
))

val friendships: RDD[(TEdge[Int])] = sc.parallelize(Array(
  TEdge[Int](1L, 1L, 2L, Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2013-01-01")), 1),
  TEdge[Int](2L, 2L, 3L, Interval(LocalDate.parse("2010-01-01"), LocalDate.parse("2013-01-01")), 1),
  TEdge[Int](3L, 3L, 4L, Interval(LocalDate.parse("2011-01-01"), LocalDate.parse("2012-01-01")), 1),
  TEdge[Int](4L, 4L, 5L, Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2014-01-01")), 1),
  TEdge[Int](5L, 2L, 5L, Interval(LocalDate.parse("2012-01-01"), LocalDate.parse("2013-01-01")), 1)
))

import sqlContext.implicits._
`; 

