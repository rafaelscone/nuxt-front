<template>
<Text type="title">{{ title }}</Text>
<Input label="Your title" :on-change="(value:string) => title = value"/>

<Input label="Your Name" :on-change="(value:string) => user.firstname = value"/>
<Input label="Last Name" :on-change="(value:string) => user.lastname = value" />

<Button @click="sendValue">Send Data</Button>

<hr />

<Input label="search by id" :on-change="(value:string) => id = value" :value="id" />
<Button @click="getById">Check ID</Button>

{{ byID }}

</template>

<script lang="ts" setup>
const { dispatch, fetchById } = useNewUser();
const user = ref<NewUser>({
  firstname: "",
  lastname: ""
});
const byID =ref<NewUser>({
  firstname: "",
  lastname: ""
});

const id = ref<string>("default");
const title = ref("Register Page");

function sendValue() {
  dispatch(user.value)
    .then( (res)=>{
      alert("Register Success!");
      console.log(res);
    }).catch( (error)=>{
      console.log(error);
    }).finally(()=>{
      alert("Finished!");
    });
}

function getById(){
  fetchById(id.value)
    .then( (res)=>{
      console.log(res);
      byID.value = res.data;
    }).catch( (error)=>{
      console.log(error);
    }).finally( ()=>{
      alert("finished request!");
    });
}

</script>