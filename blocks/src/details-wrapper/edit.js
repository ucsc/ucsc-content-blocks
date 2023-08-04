import { __ } from '@wordpress/i18n';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import './editor.scss';
export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'details-wrapper',
	} );
	const ALLOWED_BLOCKS = ['ucsc/details'];
	const { children, ...innerBlocksProps } = useInnerBlocksProps(blockProps, {ALLOWED_BLOCKS});

	return (
		<>
			<div { ...blockProps }>
				<p class="wrapper-heading">Details wrapper</p>

				<div {...innerBlocksProps}>

					{ children }
				</div>

			</div>
		</>
	);
}
