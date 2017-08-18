<template>
    <div class="home-img">
        <div class="video-container">
            <video id="audio" src="http://61.155.212.115/10/b/f/t/h/bfthajjjykiqgsazoxlxhrirozvsns/hc.yinyuetai.com/D77C0155B0DAB36C3DFE9E4B6C9A10D2.flv?sc=2115fd092a436c7a&br=780&vid=2611244&aid=1402&area=US&vst=3"></video>
        </div>
        <div class="playToggle" :class="{'playPause':!isPlaying}" @click="playToggle">
            <img src="../../assets/img/pause.png" v-show="!isPlaying">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isPlaying : true
        }
    },
    methods:{
        playToggle(){
            var audio =document.querySelector('#audio');
            this.isPlaying?(audio.pause(),this.isPlaying=!this.isPlaying):(audio.play(),this.isPlaying=!this.isPlaying)
            console.log(audio.buffered)
        }
    }
}
</script>
<style lang="scss" scoped>
    .home-img{
        video{
            height: 289px;
        }
        .playToggle{
            width: 514px;
            height: 289px;
            position: relative;
            top: -292px;
            img{
                width: 100px;
                margin: 95px 207px;
            }
        }
        .playPause{
            background-color: rgba(0,0,0,0.4)
        }
    }
</style>


