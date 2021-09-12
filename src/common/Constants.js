/*--------------------------------------------------------------------------
 * インポート
 *------------------------------------------------------------------------*/
import * as conf from '../../conf.json';
/*--------------------------------------------------------------------------
 * システム共通で使用する定数一覧
 *------------------------------------------------------------------------*/
const env = conf.env;

// 環境に応じた環境変数の切り替え
let domain, poolid, userpool, clientid;
const region = 'ap-northeast-1';
if (env === 'prod') {
  domain = '**********';
  poolid = '***************************************************';
  userpool = '************************';
  clientid = '**************************';
}
else if (env === 'pilot') {
  domain = '**********';
  poolid = '***************************************************';
  userpool = '************************';
  clientid = '**************************';
} else {
  domain = '9j9qpttvj6';
  poolid = 'ap-northeast-1:2d7ef92f-5d9b-48bf-ab93-35b63602ca9c';
  userpool = 'ap-northeast-1_PYJR2h5VD';
  clientid = '6v9tqaech9b5sd4uqu7hegpagk';
}

export default {
  // AWS設定情報
  appConfig: {
    region: region,
    IdentityPoolId: poolid,
    UserPoolId: userpool,
    ClientId: clientid,
  },
  // 画面ID
  SCREEN_ID : {
    MENU: 'Menu',
    GAME_INFO: 'GameInfo',
    EDIT_INFO: 'EditInfo',
    EDIT_EVENT: 'EditEvent',
    CREATE_GAME: 'CreateGame',
    CREATE_EVENT: 'CreateEvent',
    CREATE_TEAM: 'CreateTeam',
    CREATE_PLAYER: 'CreatePlayer',
    CREATE_TEAMPLAYER: 'CreateTeamPlayer',
    ASSIGN_PLAYER: 'AssignPlayers',
    LIVE_TAGGING: 'LiveTagging',
    GAME_SELECTION: 'GameSelection',
    PLAY_BY_PLAY: 'PlayByPlay',
    STATS_VIEWER: 'StatsViewer',
    NEW_GAME: 'NewGame',
    MAIN: 'Main',
    LOG_IN: 'LoginMockup',
    INTRO: 'IntroMockup',
  },
  // ナビゲーションタイトル
  NAV_TITLE : {
    LOG_IN: 'Log In',
    MENU: 'Menu',
    GAME_INFO: 'Game Information',
    EDIT_INFO: 'Select Information',
    EDIT_EVENT: 'Edit Information',
    CREATE_GAME: 'New Game',
    CREATE_EVENT: 'New Event',
    CREATE_TEAM: 'New Team',
    CREATE_PLAYER: 'New Player',
    CREATE_TEAMPLAYER: 'New TeamPlayer',
    NEW_GAME: 'New Game',
    ASSIGN_PLAYER: 'Assign Players',
    LIVE_TAGGING: 'Live Tagging',
    GAME_SELECTION: 'Game Selection',
    PLAY_BY_PLAY: 'Play by Play',
    STATS_VIEWER: 'Stats Viewer',
    MAIN: 'Main',
  },
  // API Gateway の基底URL
  API_BASE_URL : 'https://' + domain + '.execute-api.' + region + '.amazonaws.com/' + env + '/',
  // メニュー画面タイトル
  TITLE_MENU : "Basket Ball Platform",
  // メニュー画面からの遷移先識別情報
  SCREEN_CATEGORY: {
    LIVE_TAGGING: '1',
    STATS_VIEWER: '2',
    EDIT_INFO: '3',
    PLAY_BY_PLAY: '4',
  },
  // リクエストメソッド
  REQUEST_METHOD: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
  },
  // 参照先DBのクエリを識別するための種別
  QUERY_PATTERN: {
    // PKとSKの完全一致のクエリ
    TYPE_0: 0,
    // PKとLSIの完全一致のクエリ
    TYPE_1: 1,
    // SKがbegins_withのクエリ
    TYPE_2: 2,
    // AK項目のFilterによるクエリ
    TYPE_3: 3,
    // PKのみによるクエリ
    TYPE_4: 4,
  },
  // DBの登録/更新/削除を識別するためのカテゴリ
  DB_CATEGORY: {
    // 登録
    ADD: 'add',
    // 更新
    UPDATE: 'update',
    // 削除
    DELETE: 'delete',

    UPDATE_ITEM: 'update_item',
    SAVE: 'save',
    PERIOD: 'period',
    END: 'end',
    CUSTOMTAG: 'customtag',
  },
  // DBのソートキータイプ
  SK_TYPE: {
    // イベント
    EVENT: 'ev',
    // ゲーム
    GAME: 'gm',
    // チーム
    TEAM: 'tm',
    // プレイヤー
    PLAYER: 'pl',
    // なし
    NONE: 'none',
  },
  // API名
  API_NAME: {
    INFO: 'info',
    TAGGING: 'tagging',
    PLAY_BY_PLAY: 'playbyplay',
    USER_INFO: 'user-info',
    STATS_VIEWER: 'statsviewer',
  },
  // ピリオドドロップダウンのリスト値
  PERIOD_LIST: [
    {label:'Q1', value: 'Q1'},
    {label:'Q2', value: 'Q2'},
    {label:'Q3', value: 'Q3'},
    {label:'Q4', value: 'Q4'},
    {label:'OT', value: 'OT'},
  ],
  // プレイドロップダウンのリスト値
  PLAY_LIST: [
    {label: "2P", value: "2P", key:'2P'},
    {label: "3P", value: "3P", key:'3P'},
    {label: "Assist", value: "Assist", key:'Assist'},
    {label: "OFF_REB", value: "OFF_REB", key:'OFF_REB'},
    {label: "DEF_REB", value: "DEF_REB", key:'DEF_REB'},
    {label: "BLOCK", value: "BLOCK", key:'BLOCK'},
    {label: "FT :1Shot", value: "FT :1Shot", key:'FT:1Shot'},
    {label: "FT :2Shot", value: "FT :2Shot", key:'FT:2Shot'},
    {label: "FT :3Shot", value: "FT :3Shot", key:'FT:3Shot'},
    // {label: "FT OFF_REB", value: "FT OFF_REB"},
    // {label: "FT DEF_REB", value: "FT DEF_REB"},
    {label: "TO", value: "TO", key:'TO'},
    {label: "OFF_Foul", value: "OFF_Foul", key:'OFF_Foul'},
    {label: "DEF_Foul", value: "DEF_Foul", key:'DEF_Foul'},
    {label: "Steal", value: "Steal", key:'Steal'},
    {label: "Change", value: "Change", key:'Change'},
    {label: "TimeOut", value: "TimeOut", key:'TimeOut'},
  ],
  // リザルトドロップダウンのリスト値
  RESULT_LIST: [
    {label: "Made", value: "Made"},
    {label: "Miss", value: "Miss"},
    {label: "In", value: "In"},
    {label: "Out", value: "Out"},
    {label: "OB", value: "OB"},
    {label: "Violation", value: "Violation"},
    {label: "TO", value: "TO"},
    {label: "DEF_Foul", value: "DEF_Foul"},
  ],
  RESULT_SHOT_LIST: [
    {label: "Made", value: "Made",key:'Made'},
    {label: "Miss", value: "Miss",key:'Miss'},
  ],
  RESULT_CHANGE_LIST: [
    {label: "In", value: "In",key:'In'},
    {label: "Out", value: "Out",key:'Out'},
  ],
  RESULT_TO_LIST: [
    {label: "OB", value: "OB",key:'OB'},
    {label: "Violation", value: "Violation",key:'Violation'},
    {label: "TO", value: "TO",key:'TO'},
  ],
  RESULT_DEF_FOUL_LIST: [
    {label: "DEF_Foul", value: "DEF_Foul"},
  ],
  RESULT_FT_LIST: [
    {label: "Made", value: "Made",key:'Made'},
    {label: "Miss", value: "Miss",key:'Miss'},
  ],
  // ポジションドロップダウンのリスト値
  POSITION_LIST: [
    {label: ' ', value: ' '},
    {label: 'G', value: 'G'},
    {label: 'PG', value: 'PG'},
    {label: 'SG', value: 'SG'},
    {label: 'F', value: 'F'},
    {label: 'SF', value: 'SF'},
    {label: 'PF', value: 'PF'},
    {label: 'GF', value: 'GF'},
    {label: 'C', value: 'C'},
    {label: 'CF', value: 'CF'},
  ],
  TAG_CATEGORY: {
    NONE: 0,
    MADE: 1,
    MISS: 2,
    FT: 3,
    FOUL: 4,
    TO: 5,
    END: 6,
    UNKNOWN: 7
  },
  SUB_TAG_CATEGORY: {
    NONE: 0,
    MADE: 1,
    MADE_FOUL: 2,
    MISS: 3,
    MISS_FOUL: 4,
    MISS_BLOCK: 5
  },
  PLAY_TYPE: {
    '2P': '2P',
    '3P': '3P',
    'FT': 'FT',
    'AST': 'Assist',
    'FOUL': 'Foul',
    'BLK':'BLOCK',
    'ORB': 'OFF_REB',
    'DRB': 'DEF_REB',
    'TO': 'TO',
    'TO_FOUL': 'TO_Foul',
    'TO_STL': 'TO_Steal',
    'STL': 'Steal',
    'TO_OB': 'TO_OB',
    'OB': 'OB',
    'TO_VIO': 'TO_Violation',
    'VIO': 'Violation',
    'RT': 'RefreeTime',
    'HB': 'HeldBall',
    'TIMEOUT': 'TimeOut',
    'IN': 'In',
    'OUT': 'Out',
  },
  MAIN_TAG: {
    'SHOT': 'Shot',
    'FT': 'FT',
    'FT_1': 'FT_1shot',
    'FT_2': 'FT_2shot',
    'FT_3': 'FT_3shot',
    'FOUL': 'Foul',
    'TO': 'TO',
    'STL': 'Steal',
    'END': 'END',
    'TIMEOUT': 'TimeOut',
    'CHANGE': 'Change'
   },
  SHOT_RESULT: {
    'MADE': 'Made',
    'MISS': 'Miss'
  },
  PERIODS: [
    { label: 'Q1', value: 'Q1', key: 'Q1'},
    { label: 'Q2', value: 'Q2', key: 'Q2'},
    { label: 'Q3', value: 'Q3', key: 'Q3'},
    { label: 'Q4', value: 'Q4', key: 'Q4'},
    { label: 'Q5', value: 'Q5', key: 'Q5'},
    { label: 'Q6', value: 'Q6', key: 'Q6'},
    { label: 'Q7', value: 'Q7', key: 'Q7'},
    { label: 'Q8', value: 'Q8', key: 'Q8'},
    { label: 'Q9', value: 'Q9', key: 'Q9'},
  ],
  NUMBERS: [
    { label: '0', value: '0', key:0 },
    { label: '1', value: '1', key:1 },
    { label: '2', value: '2', key:2 },
    { label: '3', value: '3', key:3 },
    { label: '4', value: '4', key:4 },
    { label: '5', value: '5', key:5 },
    { label: '6', value: '6', key:6 },
    { label: '7', value: '7', key:7 },
    { label: '8', value: '8', key:8 },
    { label: '9', value: '9', key:9 },
    { label: '10', value: '10', key:10 },
    { label: '11', value: '11', key:11 },
    { label: '12', value: '12', key:12 },
    { label: '13', value: '13', key:13 },
    { label: '14', value: '14', key:14 },
    { label: '15', value: '15', key:15 },
    { label: '16', value: '16', key:16 },
    { label: '17', value: '17', key:17 },
    { label: '18', value: '18', key:18 },
    { label: '19', value: '19', key:19 },
    { label: '20', value: '20', key:20 },
    { label: '21', value: '21', key:21 },
    { label: '22', value: '22', key:22 },
    { label: '23', value: '23', key:23 },
    { label: '24', value: '24', key:24 },
    { label: '25', value: '25', key:25 },
    { label: '26', value: '26', key:26 },
    { label: '27', value: '27', key:27 },
    { label: '28', value: '28', key:28 },
    { label: '29', value: '29', key:29 },
    { label: '30', value: '30', key:30 },
    { label: '31', value: '31', key:31 },
    { label: '32', value: '32', key:32 },
    { label: '33', value: '33', key:33 },
    { label: '34', value: '34', key:34 },
    { label: '35', value: '35', key:35 },
    { label: '36', value: '36', key:36 },
    { label: '37', value: '37', key:37 },
    { label: '38', value: '38', key:38 },
    { label: '39', value: '39', key:39 },
    { label: '40', value: '40', key:40 },
    { label: '41', value: '41', key:41 },
    { label: '42', value: '42', key:42 },
    { label: '43', value: '43', key:43 },
    { label: '44', value: '44', key:44 },
    { label: '45', value: '45', key:45 },
    { label: '46', value: '46', key:46 },
    { label: '47', value: '47', key:47 },
    { label: '48', value: '48', key:48 },
    { label: '49', value: '49', key:49 },
    { label: '50', value: '50', key:50 },
    { label: '51', value: '51', key:51 },
    { label: '52', value: '52', key:52 },
    { label: '53', value: '53', key:53 },
    { label: '54', value: '54', key:54 },
    { label: '55', value: '55', key:55 },
    { label: '56', value: '56', key:56 },
    { label: '57', value: '57', key:57 },
    { label: '58', value: '58', key:58 },
    { label: '59', value: '59', key:59 },
    { label: '60', value: '60', key:60 },
    { label: '61', value: '61', key:61 },
    { label: '62', value: '62', key:62 },
    { label: '63', value: '63', key:63 },
    { label: '64', value: '64', key:64 },
    { label: '65', value: '65', key:65 },
    { label: '66', value: '66', key:66 },
    { label: '67', value: '67', key:67 },
    { label: '68', value: '68', key:68 },
    { label: '69', value: '69', key:69 },
    { label: '70', value: '70', key:70 },
    { label: '71', value: '71', key:71 },
    { label: '72', value: '72', key:72 },
    { label: '73', value: '73', key:73 },
    { label: '74', value: '74', key:74 },
    { label: '75', value: '75', key:75 },
    { label: '76', value: '76', key:76 },
    { label: '77', value: '77', key:77 },
    { label: '78', value: '78', key:78 },
    { label: '79', value: '79', key:79 },
    { label: '80', value: '80', key:80 },
    { label: '81', value: '81', key:81 },
    { label: '82', value: '82', key:82 },
    { label: '83', value: '83', key:83 },
    { label: '84', value: '84', key:84 },
    { label: '85', value: '85', key:85 },
    { label: '86', value: '86', key:86 },
    { label: '87', value: '87', key:87 },
    { label: '88', value: '88', key:88 },
    { label: '89', value: '89', key:89 },
    { label: '90', value: '90', key:90 },
    { label: '91', value: '91', key:91 },
    { label: '92', value: '92', key:92 },
    { label: '93', value: '93', key:93 },
    { label: '94', value: '94', key:94 },
    { label: '95', value: '95', key:95 },
    { label: '96', value: '96', key:96 },
    { label: '97', value: '97', key:97 },
    { label: '98', value: '98', key:98 },
    { label: '99', value: '99', key:99 },
  ],
  TIMES: [
    { label: '00', value: '00', key:0 },
    { label: '01', value: '01', key:1 },
    { label: '02', value: '02', key:2 },
    { label: '03', value: '03', key:3 },
    { label: '04', value: '04', key:4 },
    { label: '05', value: '05', key:5 },
    { label: '06', value: '06', key:6 },
    { label: '07', value: '07', key:7 },
    { label: '08', value: '08', key:8 },
    { label: '09', value: '09', key:9 },
    { label: '10', value: '10', key:10 },
    { label: '11', value: '11', key:11 },
    { label: '12', value: '12', key:12 },
    { label: '13', value: '13', key:13 },
    { label: '14', value: '14', key:14 },
    { label: '15', value: '15', key:15 },
    { label: '16', value: '16', key:16 },
    { label: '17', value: '17', key:17 },
    { label: '18', value: '18', key:18 },
    { label: '19', value: '19', key:19 },
    { label: '20', value: '20', key:20 },
    { label: '21', value: '21', key:21 },
    { label: '22', value: '22', key:22 },
    { label: '23', value: '23', key:23 },
    { label: '24', value: '24', key:24 },
    { label: '25', value: '25', key:25 },
    { label: '26', value: '26', key:26 },
    { label: '27', value: '27', key:27 },
    { label: '28', value: '28', key:28 },
    { label: '29', value: '29', key:29 },
    { label: '30', value: '30', key:30 },
    { label: '31', value: '31', key:31 },
    { label: '32', value: '32', key:32 },
    { label: '33', value: '33', key:33 },
    { label: '34', value: '34', key:34 },
    { label: '35', value: '35', key:35 },
    { label: '36', value: '36', key:36 },
    { label: '37', value: '37', key:37 },
    { label: '38', value: '38', key:38 },
    { label: '39', value: '39', key:39 },
    { label: '40', value: '40', key:40 },
    { label: '41', value: '41', key:41 },
    { label: '42', value: '42', key:42 },
    { label: '43', value: '43', key:43 },
    { label: '44', value: '44', key:44 },
    { label: '45', value: '45', key:45 },
    { label: '46', value: '46', key:46 },
    { label: '47', value: '47', key:47 },
    { label: '48', value: '48', key:48 },
    { label: '49', value: '49', key:49 },
    { label: '50', value: '50', key:50 },
    { label: '51', value: '51', key:51 },
    { label: '52', value: '52', key:52 },
    { label: '53', value: '53', key:53 },
    { label: '54', value: '54', key:54 },
    { label: '55', value: '55', key:55 },
    { label: '56', value: '56', key:56 },
    { label: '57', value: '57', key:57 },
    { label: '58', value: '58', key:58 },
    { label: '59', value: '59', key:59 },
    { label: '60', value: '60', key:60 },
    { label: '61', value: '61', key:61 },
    { label: '62', value: '62', key:62 },
    { label: '63', value: '63', key:63 },
    { label: '64', value: '64', key:64 },
    { label: '65', value: '65', key:65 },
    { label: '66', value: '66', key:66 },
    { label: '67', value: '67', key:67 },
    { label: '68', value: '68', key:68 },
    { label: '69', value: '69', key:69 },
    { label: '70', value: '70', key:70 },
    { label: '71', value: '71', key:71 },
    { label: '72', value: '72', key:72 },
    { label: '73', value: '73', key:73 },
    { label: '74', value: '74', key:74 },
    { label: '75', value: '75', key:75 },
    { label: '76', value: '76', key:76 },
    { label: '77', value: '77', key:77 },
    { label: '78', value: '78', key:78 },
    { label: '79', value: '79', key:79 },
    { label: '80', value: '80', key:80 },
    { label: '81', value: '81', key:81 },
    { label: '82', value: '82', key:82 },
    { label: '83', value: '83', key:83 },
    { label: '84', value: '84', key:84 },
    { label: '85', value: '85', key:85 },
    { label: '86', value: '86', key:86 },
    { label: '87', value: '87', key:87 },
    { label: '88', value: '88', key:88 },
    { label: '89', value: '89', key:89 },
    { label: '90', value: '90', key:90 },
    { label: '91', value: '91', key:91 },
    { label: '92', value: '92', key:92 },
    { label: '93', value: '93', key:93 },
    { label: '94', value: '94', key:94 },
    { label: '95', value: '95', key:95 },
    { label: '96', value: '96', key:96 },
    { label: '97', value: '97', key:97 },
    { label: '98', value: '98', key:98 },
    { label: '99', value: '99', key:99 },
  ],

};