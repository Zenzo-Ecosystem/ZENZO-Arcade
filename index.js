const req = require('requestify')
const basePublicUrl = 'https://arcade.zenzo.io/api/v1/'
var authKey = ""

exports.auth = function (creds) {
  if (!creds) throw "An API Key is required to Authenticate"
  if (creds.length !== 64) throw "Invalid API Key"
  authKey = creds
  return true
}

exports.ping = async function () {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  try {
    var result = await req.request(basePublicUrl + 'ping', {
      method: 'POST',
      body: {
        api_key: authKey
      }
    })
    result = JSON.parse(result.body)
    return result.message
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.account = async function () {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  try {
    var result = await req.request(basePublicUrl + 'account', {
      method: 'POST',
      body: {
        api_key: authKey
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.forgetransfer = async function (reqItem, reqReceiver) {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  if (!reqItem || reqItem.length !== 64) throw 'Invalid item ID'
  if (!reqReceiver) throw 'Invalid receiver ID'
  try {
    var result = await req.request(basePublicUrl + 'forgetransfer', {
      method: 'POST',
      body: {
        api_key: authKey,
        item: reqItem,
        receiver: reqReceiver
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.forgecreate = async function (value, name, image) {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  if (!name || name.length === 0 || name.length >= 34) throw 'Invalid item name'
  if (!value || value < 10) throw 'Invalid item value'
  if (!image || image.length < 10) throw 'Invalid item image URL'
  try {
    var result = await req.request(basePublicUrl + 'forgecreate', {
      method: 'POST',
      body: {
        api_key: authKey,
        title: name,
        value: value,
        image: image
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.forgecraft = async function (itemOne, itemTwo, name, image) {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  if (!itemOne || itemOne.length !== 64) throw 'Invalid itemOne ID'
  if (!itemTwo || itemTwo.length !== 64) throw 'Invalid itemTwo ID'
  if (!name || name.length === 0 || name.length >= 34) throw 'Invalid crafted item name'
  if (!image || image.length < 10) throw 'Invalid crafted item image URL'
  try {
    var result = await req.request(basePublicUrl + 'forgecraft', {
      method: 'POST',
      body: {
        api_key: authKey,
        itemOne: itemOne,
        itemTwo: itemTwo,
        name: name,
        image: image
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.forgesmelt = async function (id) {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  if (!id || id.length !== 64) throw 'Invalid item ID'
  try {
    var result = await req.request(basePublicUrl + 'forgesmelt', {
      method: 'POST',
      body: {
        api_key: authKey,
        item: id
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.forgelist = async function () {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  try {
    var result = await req.request(basePublicUrl + 'forgelist', {
      method: 'POST',
      body: {
        api_key: authKey
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}

exports.regen = async function () {
  if (authKey === "") throw 'Authentication is required prior to making API requests'
  try {
    var result = await req.request(basePublicUrl + 'regen', {
      method: 'POST',
      body: {
        api_key: authKey
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      throw 'ZENZO SDK Error caught: (' + err.body + ')'
    } else {
      throw 'ZENZO SDK Error caught: (' + err + ')'
    }
  }
}
