<script>
import TotalSales from "@/components/TotalSales";
import TotalUsers from "@/components/TotalUsers";
import TodayUser from "@/components/TodayUser";
import TotalOrders from "@/components/TotalOrders";

export default {
  name: "TopView",
  components: {
    TotalSales,
    TotalUsers,
    TotalOrders,
    TodayUser
  }
}
</script>

<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <total-sales/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-orders/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-users/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <today-user/>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<style scoped>

</style>