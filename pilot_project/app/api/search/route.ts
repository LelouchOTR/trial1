import Client from "@searchkit/api";
import { createContext } from "react";
import { NextRequest, NextResponse } from 'next/server'

const apiConfig = {
  connection: {
    host: "http://localhost:9200"
    // if you are authenticating with api key
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
    // apiKey: '###'
    // if you are authenticating with username/password
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
    // auth: {
    //   username: "elastic",
    //   password: "changeme"
    // },
  },
  search_settings: {
    // search_attributes: ["name", "description", "brand", "categories", "hierarchicalCategories", "type", "price", "price_range", "image", "url", "free_shipping", "popularity", "rating"],
    search_attributes: ["name", "description"],
    result_attributes: ["name", "price", "description", "categories"],
    highlight_attributes: ["name"],
    facet_attributes: [{ attribute: 'price', field: 'price', type: 'numeric' }],
    //facet_attributes: [{attribute: "free_shipping", type: "free_shipping.keyword"},{attribute: "price", type: "numeric"}],
    //sorting: {default: {field: "_score", order: "desc"}, _price_asc: {field: "price", order: "asc"}, _price_desc: {field: "price", order: "desc"}},
    //facet_attributes: ["free_shipping"]
    //facet_attributes: ["price"]
  },
};

const apiClient = Client(apiConfig);



export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json()

  const results = await apiClient.handleRequest(data, {
    getQuery: (query, search_attributes) => {
      return [
        {
          combined_fields: {
            query,
            fields: search_attributes,
          },
        },
      ];
    },
  });

  return NextResponse.json(results)
}