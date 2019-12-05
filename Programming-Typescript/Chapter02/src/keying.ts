type APIResponse = {
  user: {
    userId: string
    friendList: {
      count: number
      friends: {
        firstName: string
        lastName: string
      }[]
    }
  }
}

type FriendList = APIResponse['user']['friendList']

type Friend = FriendList['friends'][number]


function getAPIResponse(): APIResponse {
  return {
    user: {
      userId: "dstevens",
      friendList: {
        count: 1,
        friends: [
          {
            firstName: "Jesus",
            lastName: "Christ"
          },
          {
            firstName: "John",
            lastName: "Smith"
          }
        ]
      }
    }
  }
}

type ResponseKeys = keyof APIResponse // 'user'
type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
type FriendListKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'
type FriendListKeys2 = keyof FriendList // 'count' | 'friends'

type Get = {
  <O extends object, K1 extends keyof O>
    (o: O, k1: K1): O[K1]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>
    (o: O, k1: K1, k2: K2): O[K1][K2]
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>
    (o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
}

let get: Get = (object: any, ...keys: string[]) => {
  let result = object
  keys.forEach(k => result = result[k])
  return result
}



function renderFriendList(friendList: FriendList) {
  // ...
}

let response = getAPIResponse();
renderFriendList(response.user.friendList);