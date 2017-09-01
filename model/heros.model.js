/*
*
* 英雄版
*
*/

const mongoose = require('../mongodb').mongoose;
const autoIncrement = require('mongoose-auto-increment');
const mongoosePaginate = require('mongoose-paginate');

// 自增ID初始化
autoIncrement.initialize(mongoose.connection);

// 标签模型
const herosSchema = new mongoose.Schema({

	// 名称
	name: { type: String, required: true, validate: /\S+/ },

	// 内容
  content: String,

  // github
  github: String,

  // blog
  blog: String,

  // 状态 1 待审核，2 审核通过， 3 审核不通过
  state: { type: Number, default: 1 },

	// 发布日期
	create_at: { type: Date, default: Date.now }

});

// 翻页 + 自增ID插件配置
tagSchema.plugin(mongoosePaginate)
heros.plugin(autoIncrement.plugin, {
	model: 'Heros',
	field: 'id',
	startAt: 1,
	incrementBy: 1
});


// 标签模型
const Heros = mongoose.model('Heros', herosSchema);

// export
module.exports = Heros;