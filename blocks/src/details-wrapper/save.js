
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
	});
	const innerBlocksProps = useInnerBlocksProps.save();
	return (
		<div {...blockProps}>
			<a class="expand-collapse" id="expand" href="#/">
				Expand All
			</a>
			<div {...innerBlocksProps} />
		</div>
	);
}
