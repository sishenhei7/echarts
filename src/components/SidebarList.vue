<template>
	<mu-list toggle-nested class="list1">
		<mu-list-item button :ripple="true" nested :open="false">
			<mu-list-item-title>Nav 1</mu-list-item-title>
			<mu-list-item-action>
				<mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
			</mu-list-item-action>
			<template v-for="item in navList">
				<mu-list-item :key="item.name" button :ripple="false" slot="nested" @click="goRouter(item.route)">
					<mu-list-item-title>
						{{ item.name }}
					</mu-list-item-title>
				</mu-list-item>
			</template>
		</mu-list-item>
	</mu-list>
</template>

<script>
export default {
	name: 'SidebarList',
	data() {
		return {
			navList: [
				{
					name: 'Category1Test1',
					route: '/category1/test1',
				},
				{
					name: 'Category1Test2',
					route: '/category1/test2',
				},
				{
					name: 'Category2Test1',
					route: '/category2/test1',
				},
				{
					name: 'Category2Test2',
					route: '/category2/test2',
				},
			]
		};
	},
  methods: {
		goRouter(path) {
			this.$router.push({ path });
    }
  }
}
</script>





















