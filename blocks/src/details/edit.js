import {
	RichText,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { SPACE } from '@wordpress/keycodes';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const ALLOWED_BLOCKS = [ 'core/paragraph' ];
	const { summary, showContent } = attributes;
	const blockProps = useBlockProps( {
		className: [ 'details-block' ],
	} );
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS
	} );

	const onChangeSummary = ( newSummary ) => {
		setAttributes( { summary: newSummary } );
	};
	const keyUpListener = ( e ) => {
		if ( e.keyCode === SPACE ) {
			e.preventDefault();
		}
	};
	// Check if either the block or the inner blocks are selected.
	const hasSelection = useSelect(
		( select ) => {
			const { isBlockSelected, hasSelectedInnerBlock } =
				select( blockEditorStore );
			/* Sets deep to true to also find blocks inside the details content block. */
			return (
				hasSelectedInnerBlock( clientId, true ) ||
				isBlockSelected( clientId )
			);
		},
		[ clientId ]
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<ToggleControl
						label={ __( 'Open by default' ) }
						checked={ showContent }
						onChange={ () =>
							setAttributes( {
								showContent: ! showContent,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<details
				{ ...innerBlocksProps }
				open={ hasSelection || showContent }
			>
				<summary className="dashicons-before" onKeyUp={ keyUpListener }>
					<RichText
						value={ summary }
						onChange={ onChangeSummary }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						placeholder={ __(
							'Enter the summary text...',
							'details'
						) }
						aria-label={ __( 'Summary text' ) }
						multiline={ false }
					/>
				</summary>
				{ innerBlocksProps.children }
			</details>
		</>
	);
}
