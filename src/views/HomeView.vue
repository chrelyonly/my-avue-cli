<template>
  <avue-crud ref="crud"
             :option="option"
             :data="data"></avue-crud>
</template>
<script setup>
import { ref } from 'vue';
const data = ref([{
  icon: "el-icon-platform-eleme",
  color: 'rgba(201, 37, 37, 1)',
  array: '1,2,3',
  video: '/images/logo-bg.jpg',
  href: 'https://www.baidu.com',
  string: '/images/logo-bg.jpg,/images/logo-bg.jpg',
  img: 'https://avuejs.com/images/logo-bg.jpg,https://avuejs.com/images/logo-bg.jpg'
}])
const option = ref({
  align: 'center',
  menuAlign: 'center',
  border: true,
  column: [{
    label: '超链接',
    prop: 'href',
    type: 'url'
  }, {
    label: '图标',
    prop: 'icon',
    type: 'icon',
    iconList: [{
      label: '阿里图标-Symbol图标',
      list: [{
        label: '机构',
        value: '#icon-jigou'
      },
        {
          label: '短信管理',
          value: '#icon-duanxinguanli'
        },
        {
          label: '发票管理系统',
          value: '#icon-fapiaoguanlixitong'
        },
        {
          label: '角色',
          value: '#icon-jiaose'
        },
        {
          label: '黑名单',
          value: '#icon-heimingdan2'
        },
        {
          label: 'KHCFDC_附件',
          value: '#icon-fujian4'
        },
        {
          label: '文档',
          value: '#icon-wendang3'
        },
        {
          label: '刷卡',
          value: '#icon-shuaka'
        },
        {
          label: '停车',
          value: '#icon-tingche3'
        },
        {
          label: '对象存储OSS',
          value: '#icon-duixiangcunchuOSS'
        },
        {
          label: '反馈',
          value: '#icon-fankui2'
        },
        {
          label: '短信',
          value: '#icon-ziyuan1'
        },
        {
          label: '对象存储服务',
          value: '#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu'
        },
        {
          label: '数据库_jurassic',
          value: '#icon-jurassic_data'
        },
        {
          label: '日志',
          value: '#icon-rizhi1'
        },
        {
          label: '权限',
          value: '#icon-quanxian4'
        },
        {
          label: '订单',
          value: '#icon-5'
        },
        {
          label: '机构',
          value: '#icon-jigou1'
        },
        {
          label: '机构人员',
          value: '#icon-jigourenyuan'
        },
        {
          label: '角色管理',
          value: '#icon-jiaoseguanli4'
        },
        {
          label: '角色管理',
          value: '#icon-jiaoseguanli5'
        },
        {
          label: '数据监控',
          value: '#icon-shujujiankong'
        },
        {
          label: '活动展示',
          value: '#icon-huodongzhanshi'
        },
        {
          label: 'vip invitation',
          value: '#icon-vipinvitation'
        }
      ]
    }, {
      label: '基本图标',
      list: [{
        label: '名称1',
        value: 'el-icon-info'
      }, {
        label: '名称2',
        value: 'el-icon-error'
      }, {
        label: '名称3',
        value: 'el-icon-success'
      }, {
        label: '名称4',
        value: 'el-icon-warning'
      }, {
        label: '名称5',
        value: 'el-icon-question'
      }]
    }, {
      label: '方向图标',
      list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']
    }, {
      label: '符号图标',
      list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
    }, {
      label: '阿里云图标',
      list: ['iconfont icon-zhongyingwen', 'iconfont icon-rizhi1', 'iconfont icon-bug', 'iconfont icon-qq1', 'iconfont icon-weixin1']
    }]
  }, {
    label: '颜色',
    prop: 'color',
    type: 'color'
  },
    {
      label: '单图',
      prop: 'video',
      type: 'upload',
      listType: 'picture-img',
      span: 24,
      propsHttp: {
        home: 'https://avuejs.com',
      },
      tip: '只能上传jpg/png用户头像，且不超过500kb',
      action: '/imgupload'
    }, {
      label: '图片',
      prop: 'img',
      dataType: 'string',
      type: 'img'
    }, {
      label: '图片上传组件',
      prop: 'string',
      dataType: 'string',
      type: 'upload',
      propsHttp: {
        home: 'https://avuejs.com',
        res: 'data'
      },
      span: 24,
      listType: 'picture-card',
      tip: '只能上传jpg/png文件，且不超过500kb',
      action: '/imgupload'
    }, {
      label: '数组',
      prop: 'array',
      dataType: 'number',
      propsHttp: {
        home: 'http://demo.cssmoban.com',
      },
      type: 'array'
    }]
})
</script>
