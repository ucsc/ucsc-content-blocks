import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';
export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'details-wrapper',
	} );
	const ALLOWED_BLOCKS = [ 'ucsc/details' ];
	return (
		<>
			<div { ...blockProps }>
				<p class="wrapper-heading">Details wrapper</p>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		</>
	);
}
