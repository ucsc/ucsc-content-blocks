
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: ['details-block'],
	});
	const innerBlocksProps = useInnerBlocksProps.save();
	const { summary } = attributes;


	return (
		<details {...blockProps}>
			<summary class="dashicons-before">
				<RichText.Content
					value={summary}
				/>
			</summary>
			<div {...innerBlocksProps} />
		</details>
	);
}
