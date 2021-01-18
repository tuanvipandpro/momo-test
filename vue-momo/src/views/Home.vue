<template>
  <div>
    <h1>Hello World</h1>
    <el-card>
      <div slot="header" class="clearfix">
        <h3>Cart</h3>
      </div>
        <el-row>
          <el-col span="5"><span>TV {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(10000)}}</span></el-col>
          <el-col offset="5" span="5">
            <el-input-number v-model="tvNum" :min="1" :max="100" style="margin-left: 25px; margin-right: 25px"></el-input-number>
            <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(10000 * tvNum)}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="5"><span>Phone {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(5000)}}</span></el-col>
          <el-col offset="5" span="5">
            <el-input-number v-model="phoneNum" :min="1" :max="100" style="margin-left: 25px; margin-right: 25px"></el-input-number>
            <span>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(5000 * phoneNum)}}</span>
          </el-col>
        </el-row>
        <span>Total: {{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(5000 * phoneNum + 10000 * tvNum)}}</span>
        <el-button style="margin-top: 20px; margin-left: 20px" class="payment" type="primary" plain>Payment</el-button>
    </el-card>
  </div>
</template>

<script>
import hmacSHA256 from 'crypto-js/hmac-sha256'
import Base64 from 'crypto-js/enc-base64'
export default {
  name: 'Home',
  data () {
    return {
      secretKey: 'adasfgsdfdsf',
      tvNum: 1,
      phoneNum: 1
    }
  },
  mounted () {
    console.log('fadasdasd')
  },
  methods: {
    encrypt (message, secretKey = this.secretKey) {
      return Base64.stringify(hmacSHA256(message, this.secretKey))
    }
  }
}
</script>
