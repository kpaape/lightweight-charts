import { Series } from '../../model/series';

import { SeriesHorizontalLinePaneView } from './series-horizontal-line-pane-view';

export class SeriesPriceLinePaneView extends SeriesHorizontalLinePaneView {
	public constructor(series: Series) {
		super(series);
	}

	protected _updateImpl(height: number, width: number): void {
		const data = this._lineRendererData;
		data.visible = false;

		const seriesOptions = this._series.options();
		if (!seriesOptions.priceLineVisible) {
			return;
		}

		const lastValueData = this._series.lastValueData(undefined, true);
		if (lastValueData.noData) {
			return;
		}

		data.visible = true;
		data.y = lastValueData.coordinate;
		data.color = this._series.priceLineColor(lastValueData.color);
		data.width = width;
		data.height = height;
		data.lineWidth = seriesOptions.priceLineWidth;
		data.lineStyle = seriesOptions.priceLineStyle;
	}
}
