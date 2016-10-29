import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'

export default class ZangjingStore {
  @observable isLoading = false
  @observable text = {
    "entityMap": {},
    "blocks": [
        {
            "key": "4ieop",
            "text": "     菩薩戒羯磨文",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 6,
                    "length": 1,
                    "style": "purple"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "7nekn",
            "text": "              彌勒菩薩說",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 14,
                    "length": 1,
                    "style": "orange"
                },
                {
                    "offset": 16,
                    "length": 1,
                    "style": "yellow"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "81jik",
            "text": "沙門玄奘奉 詔譯",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "cehjg",
            "text": "受戒羯磨第一",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "dfpl8",
            "text": "若諸菩薩欲學菩薩三聚淨戒。或是",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "bg6f9",
            "text": "在家或是出家。先於無上正等菩提",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "d8l7t",
            "text": "發弘願已。當審訪求同法菩薩。已發",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "eqd8a",
            "text": "大願有智有力。於語表義能授能開。",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "64m73",
            "text": "於如是等功德具足。勝菩薩所先禮",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "e27ec",
            "text": "雙足。偏袒右肩膝輪據地。合掌恭",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "b0pcl",
            "text": "敬如是請言",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "1v9p5",
            "text": "大德憶念我如是名。於大德所乞受",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "4tj07",
            "text": "一切菩薩淨戒。唯願須臾不辭勞倦。",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "f8o0p",
            "text": "哀慜聽授〈第二第三亦如是說〉既作如是無倒",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "eb08u",
            "text": "請已。偏袒右肩恭敬禮拜。供養十方",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "4s1om",
            "text": "三世諸佛世尊。已入大地得大智慧",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "269oj",
            "text": "得大神通。諸菩薩眾。現前專念彼諸",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "eltf6",
            "text": "功德生殷淨心",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "ep9m3",
            "text": "若諸菩薩。欲授菩薩菩薩戒時。先應",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "2f3st",
            "text": "為說菩薩法藏摩呾理迦。菩薩學處",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "9t1ms",
            "text": "及犯處相。令其聽受。以慧觀察自所",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "elqrd",
            "text": "意樂。堪能思擇受菩薩戒。非唯他勸",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "9oim2",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "3t869",
            "text": "非為勝他。當知是名堅固菩薩。堪受",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }
    ]
  }
  @observable zangjings = []
  @observable updateFields = {}
  @observable searchFields = {}

  @observable searchDatas = {}

  @observable visible = false
  @observable params = {}

  @action setSearchDatas(formData) {
    this.searchDatas = formData
  }

  @action getServers(formData) {
    this.isLoading = true
    this.setSearchDatas(formData)
    
    Fetch({
      url: Api.getZangjings,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.zangjings = data.list
        this.fields = data.fields
        this.searchFields = data.search_fields
        this.updateFields = data.update_fields
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action deleteServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.deleteZangjing,
      data: {
        conditions: {
          id: formData.id
        },
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.zangjings = this.zangjings.deleteById(formData.id)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action postServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.postZangjing,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.zangjings.push(data)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action putServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.putZangjing,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        let index = this.zangjings.getIndexById(data.id)
        this.zangjings[index] = data
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  toggleVisible() {
    this.visible = !this.visible
  }

  setParams(formData) {
    this.params = formData
  }

  toJS() {
    return this.zangjings.map(zangjing => zangjing)
  }

  static fromJS(array = []) {
    return new ZangjingStore()
  }
}

