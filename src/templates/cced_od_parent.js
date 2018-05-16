import cced_od_webinar from "./cced-od.vue"
export default {
    render(h) {
        return h("div", ["Text in Parent", h(`cced_od_webinar`)])
    },
    components: {cced_od_webinar}
}