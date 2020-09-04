export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

const state = {
  id: false,
  name: '',
  type: 'basic',
  private: false,
};

const getters = {
  isAdmin(state) {
    return (state.type === 'admin');
  },
};

const actions = {
  getUserInfo({ commit, rootState }) {
    axios.get('/api/user/info').then((resp) => {
      commit(UPDATE_USER_INFO, resp.data);
    }).catch(() => {
      if(rootState.route.fullPath == "/collection") {
        //redirect to login if user/info call fails while on /collection page
        window.location.href = "/login";
      }
      
    });
  },
};

const mutations = {
  [UPDATE_USER_INFO](state, data) {
    state.id = data.id;
    state.name = data.display_name;
    state.type = data.type;
    state.private = data.private;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
