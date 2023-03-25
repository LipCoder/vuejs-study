<template>
  <div>
    <h1>Welcome to {{ title2 }}!</h1>
    <input type="text" v-model="input1" />  
    
    <!-- 프론트엔드의 핵심은 Data Control! -->
    <!-- input 바인딩 방식 [one way, two way] -->
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <!-- key: 인덱스 번호, value: 실제값, text: 화면에 보여질 텍스트 -->
      <option :key="i" :value="d.v" v-for="(d,i) in options">{{ d.t }}</option>
    </select>

    <button type="button" @click="toggleTable">toggle</button>
    <!-- v-if: 랜더링 조차 하지 않음, v-show: 렌더링은 되었지만 보여지지는 않음(숨김) -->
    <table class="table table-bordered" v-show="tableShow">
      <tr :key="i" v-for="(d,i) in options">
        <td>{{ d.v }}</td>
        <td>{{ d.t }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // 컨트롤 할 데이터를 정의
      title: '김승범의 품격',
      title2: '구로디지털단지',
      input1: 'abcibal',
      options: [
        {v:'S', t:'Seoul'},
        {v:'J', t:'Jeju'},
        {v:'B', t:'Busan'},
      ],
      region: 'S',
      tableShow: true,
    };
  },
  watch: {
    // 함수명에 해당하는 데이터가 조금이라도 변경되면 캐치한다.
    input1() {
      console.log(this.input1);
    }
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = '12345';
    },
    changeRegion() {
      alert(this.region)
    },
    toggleTable() {
      this.tableShow = this.tableShow ? false : true;
    }
  },

  // Hooks List
  // Create : 컴포넌트가 만들어질때 
  // (데이터를 페이지 로딩 전 미리 가져올때 필요)
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },

  // Mount : 컴포넌트가 DOM으로 마운트될때
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },

  // Update : 데이터가 변경될때
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },

  // Destroy : 컴포넌트가 제거될때 
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
}
</script>