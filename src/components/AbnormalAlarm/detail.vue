<template>
  <div id="detail">
    <div>
      <el-table
    :data="tableData"
    border
    style="width: 100%">
     <el-table-column
      prop="ordinal"
      label="序号"
      width="180">
    </el-table-column>

    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>

    <el-table-column
      prop="companyName"
      label="企业名称"
      width="300">
    </el-table-column>

    <el-table-column
      prop="monitoryPoint"
      label="监控点名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="type"
      label="监控类别"
      width="180">
       </el-table-column>

       <el-table-column
      prop="businessContact"
      label="企业联系人"
      width="180">
       </el-table-column>

       <el-table-column
      prop="phone"
      label="联系电话"
      width="180">
       </el-table-column>

       <el-table-column
      prop="excessiveFactor"
      label="超标因子"
      width="180">
       </el-table-column>

    

            <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        tableData: [{
          ordinal:1,
          date: '2016-05-02',
          companyName:'重庆****公司',
          monitoryPoint: '重庆金沙有限公司河道',
          type: '废水',
          businessContact:'王',
          phone:'18623192609',
          excessiveFactor:'SO2'


        }, {
          ordinal:2,
           date: '2016-05-02',
          monitoryPoint: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          businessContact:'王',
          phone:'18623192609',
          excessiveFactor:'SO2'
        }, {
           ordinal:3,
         date: '2016-05-02',
          monitoryPoint: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          businessContact:'王',
          phone:'18623192609',
          excessiveFactor:'SO2'
        }, {
           ordinal:4,
          date: '2016-05-02',
          monitoryPoint: '王小虎',
          type: '上海市普陀区金沙江路 1518 弄',
          businessContact:'王',
          phone:'18623192609',
          excessiveFactor:'SO2'
        }]
      }
    }
}
</script>

<style >
#detail{
width: 100%;
}
</style>