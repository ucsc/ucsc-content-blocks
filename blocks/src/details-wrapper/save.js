import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save( {} );
	const innerBlocksProps = useInnerBlocksProps.save();
	return (
		<div { ...blockProps }>
			<div class="expand-wrap"><a class="expand-collapse" id="expand" href="#/">
				{__('Eat All', 'details-wrapper')}
			</a></div>
			<div { ...innerBlocksProps } />
		</div>
	);
}
