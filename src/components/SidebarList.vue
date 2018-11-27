<template>
	<mu-list toggle-nested>
		<mu-list-item button :ripple="true" nested :open="false">
		<mu-list-item-title>Sent mail</mu-list-item-title>
		<mu-list-item-action>
			<mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
		</mu-list-item-action>
		<mu-list-item button :ripple="false" slot="nested">
			<mu-list-item-title>List Item 1</mu-list-item-title>
		</mu-list-item>
		<mu-list-item button :ripple="false" slot="nested">
			<mu-list-item-title>List Item 2</mu-list-item-title>
		</mu-list-item>
		<mu-list-item button :ripple="false" slot="nested">
			<mu-list-item-title>List Item 3</mu-list-item-title>
		</mu-list-item>
		</mu-list-item>
	</mu-list>
</template>

<script>

</script>





















