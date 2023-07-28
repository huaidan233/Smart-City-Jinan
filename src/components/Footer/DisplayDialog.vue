<template>
  <div class="display-dialog">
    <el-dialog
      :model-value="dialogTableVisible"
      :before-close="CloseClick"
      title="事故详情"
      width="65%"
      border
    >
      <el-table :data="dialogTableData">
        <el-table-column property="_id" label="编号" align="center"/>
        <el-table-column
          property="geometry.coordinates[0]"
          label="坐标经度"
          width="120"
          align="center"
        />
        <el-table-column
          property="geometry.coordinates[1]"
          label="坐标纬度"
          width="120"
          align="center"
        />
        <el-table-column property="title" label="新闻标题" align="center"/>
        <el-table-column property="location_name" label="新闻地点" align="center"/>
        <el-table-column
            property="sentiment_score"
            label="情感得分"
          width="120"
          align="center"
        />
        <el-table-column property="topic_index" label="分析等级" align="center"/>
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="CloseClick">退出</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
const props = defineProps({
  dialogTableData: {
    type: Array,
  },
  dialogTableVisible: {
    type: Boolean,
  },
})

const emit = defineEmits(['update:dialogTableVisible'])

function CloseClick() {
  emit('update:dialogTableVisible', false)
}
</script>

<style scoped>
:deep(.el-table .cell) {
  white-space: nowrap;
}
</style>
