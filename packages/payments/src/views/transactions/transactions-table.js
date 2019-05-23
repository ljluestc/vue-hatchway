const dateFormat = 'DD/MM/YYYY hh:mm A'

const TABLE_FILTERS = [
  {
    attribute: 'createdAt',
    label: 'Date Created',
    icon: 'el-icon-date',
    type: 'date',
  },
  {
    attribute: 'type',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'amount',
    type: 'numeric',
    icon: 'el-icon-star-off',
  },
  {
    attribute: 'customerId',
    label: 'Customer ID',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'firstName',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'lastName',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'statementDescriptor',
    label: 'Description',
    type: 'string',
    icon: 'el-icon-tickets',
  },
  {
    attribute: 'orderId',
    label: 'Customer ID',
    type: 'string',
    icon: 'el-icon-document',
  },
  {
    attribute: 'status',
    type: 'select',
    icon: 'el-icon-document',
    values: [
      {
        label: 'Settled',
        value: 'settled',
      },
      {
        label: 'Pending',
        value: 'pending',
      },
      {
        label: 'Refunded',
        value: 'refunded',
      },
      {
        label: 'Failed',
        value: 'failed',
      },
    ],
  },
]

const TABLE_COLUMNS = [
  {
    name: 'createdAt',
    label: 'Date Created',
    icon: 'el-icon-document',
    format: {
      name: 'date',
      params: [dateFormat],
    },
  },
  {
    name: 'type',
    label: 'Type',
    icon: 'el-icon-document',
    format: 'capital',
    width: 120,
    component: {
      props: {
        styleObj(val) {
          if (val === 'Refund') {
            return { color: '#fc7168' }
          }

          return {}
        },
      },
    },
  },
  {
    name: 'amount',
    label: 'Amount',
    icon: 'el-icon-document',
    format: 'dollar',
    width: 120,
    component: {
      props: {
        styleObj(val) {
          if (val < 0) {
            return { color: '#fc7168' }
          }

          return {}
        },
      },
    },
  },
  {
    name: 'customerId',
    label: 'Customer ID',
    icon: 'el-icon-document',
    width: 120,
  },
  {
    name: 'firstName',
    icon: 'el-icon-document',
    width: 120,
    component: {
      props: {
        allowEmpty: true,
      },
    },
  },
  {
    name: 'lastName',
    icon: 'el-icon-document',
    width: 120,
    component: {
      props: {
        allowEmpty: true,
      },
    },
  },
  {
    name: 'statementDescriptor',
    label: 'Description',
    icon: 'el-icon-document',
    width: 200,
  },
  {
    name: 'orderId',
    label: 'Order ID',
    icon: 'el-icon-document',
    width: 200,
  },
  {
    name: 'status',
    label: 'Status',
    icon: 'el-icon-document',
    format: 'capital',
    width: 120,
    component: {
      props: {
        styleObj(val) {
          switch (val) {
            case 'pending': return { color: '#fbb241' }
            case 'settled': return { color: '#29d737' }
            case 'failed': return { color: '#fc7168' }
            case 'refunded': return { color: '#fc7168' }
            default: return {}
          }
        },
        badge(val) {
          switch (val) {
            case 'pending': return {
              name: 'el-icon-time',
              pos: 'left',
            }
            case 'settled': return {
              name: 'el-icon-check',
              pos: 'left',
            }
            case 'failed': return {
              name: 'el-icon-close',
              pos: 'left',
            }
            case 'refunded': return {
              name: 'el-icon-refresh',
              pos: 'left',
            }
            default: return {}
          }
        },
      },
    },
  },
]

export default {
  filters: TABLE_FILTERS,
  columns: TABLE_COLUMNS,
}
