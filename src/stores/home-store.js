import { computed, observable } from 'mobx';

export default class HomeStore {
  @observable menus = [
    {
      id: 'new',
      title: '开单',
      private: false,
    }, {
      id: 'wash_car',
      title: '洗车',
      private: false,
    }, {
      id: 'normal_maintain',
      title: '快保',
      private: false,
    }, {
      id: 'daily_log',
      title: '日报',
      private: true,
    }, {
      id: 'weekly_log',
      title: '周报',
      private: true,
    }, {
      id: 'sale',
      title: '销售额',
      private: true,
    },

  ];

  @computed get commonMenus() {
    return this.menus.filter(item => item.private !== true)
  }
}
