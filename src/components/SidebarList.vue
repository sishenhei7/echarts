<template>
	<mu-list toggle-nested>
		<mu-list-item button :ripple="true" nested :open="false">
			<mu-list-item-title>Sent mail</mu-list-item-title>
			<mu-list-item-action>
				<mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
			</mu-list-item-action>
			<mu-list-item button :ripple="false" slot="nested" @click="goRouter('/category1/test1')">
				<mu-list-item-title>
					Category1Test1
				</mu-list-item-title>
			</mu-list-item>
			<mu-list-item button :ripple="false" slot="nested" @click="goRouter('/category1/test2')">
				<mu-list-item-title>
					Category1Test2
				</mu-list-item-title>
			</mu-list-item>
			<mu-list-item button :ripple="false" slot="nested" @click="goRouter('/category2/test1')">
				<mu-list-item-title>
					Category2Test1
				</mu-list-item-title>
			</mu-list-item>
			<mu-list-item button :ripple="false" slot="nested" @click="goRouter('/category2/test2')">
				<mu-list-item-title>
					Category2Test2
				</mu-list-item-title>
			</mu-list-item>
		</mu-list-item>
	</mu-list>
</template>

<script>
export default {
  methods: {
		goRouter(path) {
			this.$router.push({ path });
    }
  }
}
</script>





















