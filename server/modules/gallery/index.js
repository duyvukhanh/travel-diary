const galleryModel = require('./model')

const handlers = {
  async findMany(req, res, next) {
    try {
      let {
        pageIndex,
        pageSize,
        sortBy,
        sort, // asc | desc
        search = '',
        fields = '',
        owner
      } = req.query

      pageSize = parseInt(pageSize) || 20
      pageIndex = parseInt(pageIndex) || 1

      let limit = pageSize
      let skip = (pageIndex - 1) * pageSize
      let sortInfo = `${sort == 'desc' ? '-' : ''}${sortBy}`
      // fields = 'title, description' > fieldArr = ['title', 'description']
      let fieldArr = fields.split(',').map(field => field.trim())
      let conditions = {}
      if (search) {
        conditions.title = new RegExp(search, 'i')
      }
      if (owner) {
        conditions.owner = owner
      }

      let items = await galleryModel
        .find(conditions, fieldArr)
        .skip(skip)
        .limit(limit)
        .sort(sortInfo)

      res.json(items)
    } catch (err) {
      next(err)
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id
      let item = await galleryModel.findById(id)
      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async create(req, res, next) {
    try {
      let data = req.body
      let item = await galleryModel.create(data)
      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async update(req, res, next) {
    try {
      let data = req.body
      let files = req.files
      let id = data._id

      if (!id) {
        throw new Error(`Require 'id' to update!`)
      }

      if (files) {
        if (files.length !== 0) {
          let newFileList = []
          for (let file of files) {
            let fileNameArr = file.path.split('/')
            let fileName = fileNameArr[fileNameArr.length - 1]
            newFileList.push(fileName)
          }
          let item = await galleryModel.findById(id)
          data.images = [...item.images, ...newFileList]
          data.videos = [...item.videos]
        }
      }

      let item = await galleryModel.findByIdAndUpdate(
        id,
        data,
        { new: true }
      )
      res.json(item)
    } catch (err) {
      next(err)
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id
      let item = await galleryModel.findByIdAndDelete(id)
      res.json(item)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = handlers
