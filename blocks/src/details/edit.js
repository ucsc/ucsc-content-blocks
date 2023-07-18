
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	RichText
} from '@wordpress/block-editor';

import {
	Panel,
	PanelHeader,
	PanelRow,
	PanelBody,
	ToggleControl
} from '@wordpress/components';
import { SPACE } from '@wordpress/keycodes';
import './editor.scss';
export default function Edit({
	attributes,
	clientId,
	isSelected,
	setAttributes,
}) {
	const blockProps = useBlockProps({
		className: 'details-block',
	});

	const { summary, showContent } = attributes;

	const onChangeSummary = (newSummary) => {
		setAttributes({ summary: newSummary });
	};
	
	const keyUpListener = (e) => {
		if (e.keyCode === SPACE) {
			e.preventDefault();
		}
	};

	const clickListener = (e) => e.preventDefault();

	const isInnerBlockSelected = useSelect(
		(select) =>
			select('core/block-editor').hasSelectedInnerBlock(clientId),
		[clientId]
	);

	// const showInnerBlocks =
	// 	attributes.showContent || isSelected || isInnerBlockSelected;




	return (
		<>
			<InspectorControls key="setting">
				<Panel header="Accordion Block">
					<PanelBody title="Block Settings">
						<PanelRow>
							<ToggleControl
								label={__('Open by default')}
								onChange={(showContent) =>
									setAttributes({ showContent })
								}
								checked={showContent}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<details {...blockProps}>
				<summary onKeyUp={keyUpListener} >
					<RichText
						value={summary}
						onChange={onChangeSummary}
						placeholder={__(
							'Enter the summary text...',
							'details'
						)}
						aria-label={__('Summary text')}
					/>
				</summary>
				<InnerBlocks />
			</details>

		</>
	);
}
