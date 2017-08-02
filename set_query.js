frm.set_query("state", function(doc) {

            return {
                query: "ambavideo.ambavideo.controllers.queries.states_query",
                filters: { "country": doc.country }
            };

});
