import React from 'react';
import { translate } from '../../../translate/translate';

const CoinTileItemRender = function() {
  const { item } = this.props;

  return (
    <div className="list-group-item col-xlg-6 col-lg-12 wallet-widgets-info pointer">
      <div className={ 'widget widget-shadow' + (this.props.ActiveCoin.coin === item.coin ? ' active' : '') }>
        <div
          className="widget-content text-center bg-white padding-20"
          onClick={ () => this._dashboardChangeActiveCoin(item.coin, item.mode) }>
          <a className="avatar margin-bottom-5">
            <img
              className="img-responsive"
              src={ `assets/images/cryptologo/${item.coinlogo.toLowerCase()}.png` }
              alt={ item.coinname }/>
            <span className={ `badge up badge-${item.modecolor}` }>
              { item.modecode }
            </span>
          </a>
          <div className="coin-name">
            { item.coinname } ({ item.coinlogo.toUpperCase() })
          </div>
        </div>
      </div>
      { item.mode === 'native' &&
        this.props.Main &&
        this.props.Main.coins &&
        this.props.Main.coins.native &&
        this.props.Main.coins.native.length &&
        this.props.Main.coins.native.length > 1 &&
        <i
          onClick={ () => this.stopCoind(item.coin) }
          title="Stop"
          className="icon fa-stop-circle coind-stop-icon"></i>
      }
      { item.mode === 'native' &&
        this.props.Main &&
        this.props.Main.coins &&
        this.props.Main.coins.native &&
        this.props.Main.coins.native.length &&
        this.props.Main.coins.native.length > 1 &&
        this.state.appConfig &&
        !this.state.appConfig.stopNativeDaemonsOnQuit &&
        <i
          onClick={ () => this.removeCoin(item.coin) }
          title="Remove"
          className="icon fa-plus-circle coind-remove-icon"></i>
      }
      { this.props.Dashboard &&
        this.props.Dashboard.electrumCoins &&
        this.props.Dashboard.electrumCoins[item.coin] &&
        this.props.Dashboard.electrumCoins[item.coin].serverList &&
        this.props.Dashboard.electrumCoins[item.coin].serverList === 'none' &&
        <i
          title={ translate('SETTINGS.SPV_SINGLE_SERVER_NOTICE') }
          className="icon fa-info-circle icon-spv-connection-warning"></i>
      }
    </div>
  );
};

export default CoinTileItemRender;