import DataProcessor from '@core/data-processor'
import orderBy from 'lodash/orderBy'

const compose = (...fns) => arg => fns.reduce((acc, fn) => fn(acc), arg)

class StaticProcessor extends DataProcessor {
  constructor(params) {
    const { data = [] } = params

    super(params)

    this.fullData = [].concat(data)
    this.data = data
    this.total = data.length
    this.loading = false

    this.process = compose(
      this.filter.bind(this),
      this.sort.bind(this),
    )

    this.fullProcess = compose(this.process, this.paginate.bind(this))

    this.init()
  }

  sendRequest() {
    return new Promise(resolve => {
      setTimeout(
        resolve,
        Math.floor(Math.random() * 950) + 300,
        { data: this.fullData, total: this.total }
      )
    })
      .then(this.fullProcess)
  }

  sendRequestAll() {
    return new Promise(resolve => {
      setTimeout(
        resolve,
        Math.floor(Math.random() * 2500) + 1500,
        { data: this.fullData, total: this.total }
      )
    })
      .then(this.process)
  }

  filter(response) {
    const { filters } = this.dataQuery

    const newData = filters.reduce((acc, filter) => {
      const { attribute, value } = filter

      return acc.filter(row => {
        const testRE = new RegExp(value.toLowerCase(), 'g')
        const cellValue = row[attribute].toLowerCase()

        return testRE.test(cellValue)
      })
    }, response.data)

    return {
      data: newData,
      total: newData.length,
    }
  }

  sort(response) {
    const { sort } = this.dataQuery
    const sortKeys = Object.keys(sort)
    const sortValues = sortKeys.reduce((acc, key) => {
      acc.push(sort[key])

      return acc
    }, [])

    return {
      data: orderBy(response.data, sortKeys, sortValues),
      total: response.total,
    }
  }

  paginate(response) {
    const { page, pageSize } = this.dataQuery
    const from = (page - 1) * pageSize
    const to = page * pageSize

    return {
      data: response.data.slice(from, to),
      total: response.total,
    }
  }
}

export default StaticProcessor
