<template>
	<div class="conatiner">
		<text class="title">weex plugin examples</text>
		<div class="hello" @click="createAction">
			<text class="title">hello world</text>
		</div>
	</div>
</template>

<style scoped>
	.container{
		flex: 1;
	}
	.title{
		width: 750px;
		height: 100px;
		font-size: 32px;
		color: #000000;
	}
	.hello{
		width: 750px;
		height: 100px;
		background-color:#1ba1e2;
	}
</style>

<script>

	const plugin = weex.requireModule('dwdWeexAmap');
	module.exports = {
		data: {
			value: '',
			index: 0,
			txtChange: ''
		},
		methods: {
			createAction: function() {
				plugin.show();

			}
		}
	}
</script>