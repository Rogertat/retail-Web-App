window.__XDM_ACCEL_FLOW__ = {
  "contentHash": "0437a3afe1f2a362aed52529604eac23455863797a5ed6cecf5eae8b399cfd76",
  "edgeDomain": "aeppsemea.data.adobedc.net",
  "flow": {
    "config": {
      "consent": {
        "analytics": true
      },
      "globalsStatic": {
        "modelVersion": "1.0.0"
      },
      "sources": {
        "src_web": {
          "package": "@elbwalker/walker.js"
        }
      },
      "destinations": {
        "aep-edge": {
          "package": "destination-aep-edge",
          "settings": {
            "datastreamId": "00000000-0000-4000-8000-000000008901",
            "samplingRate": 1,
            "webSdk": {
              "defaultConsent": "in"
            }
          }
        }
      }
    },
    "sourceMapping": {
      "src_web": {
        "package": "@elbwalker/walker.js",
        "data": [
          "page_url",
          "page_name",
          "site_section",
          "cart_total",
          "order_id",
          "currency",
          "email",
          "product_sku",
          "gift_message",
          "search_term",
          "campaign_name",
          "campaign_category",
          "campaign_label",
          "campaign_placement",
          "campaign_component",
          "campaign_region_path",
          "sku",
          "product_name",
          "price",
          "category",
          "width_cm",
          "height_cm",
          "depth_cm",
          "internal_score"
        ]
      }
    },
    "mapping": {
      "page": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "web.webpagedetails.pageViews"
              }
            }
          },
          "consent": {
            "analytics": true
          }
        }
      },
      "product": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "commerce.productViews"
              },
              "_aeppsemea": {
                "map": {
                  "product": {
                    "map": {
                      "sku": {
                        "key": "data.sku"
                      },
                      "name": {
                        "key": "data.product_name"
                      },
                      "price": {
                        "key": "data.price"
                      },
                      "category": {
                        "key": "data.category"
                      },
                      "dimensions": {
                        "map": {
                          "width": {
                            "key": "data.width_cm"
                          },
                          "height": {
                            "key": "data.height_cm"
                          },
                          "depth": {
                            "key": "data.depth_cm"
                          }
                        }
                      },
                      "internalScore": {
                        "key": "data.internal_score"
                      }
                    }
                  }
                }
              }
            }
          },
          "consent": {
            "analytics": true
          }
        },
        "add": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "commerce.productListAdds"
              },
              "_aeppsemea": {
                "map": {
                  "product": {
                    "map": {
                      "sku": {
                        "key": "data.sku"
                      },
                      "name": {
                        "key": "data.product_name"
                      },
                      "price": {
                        "key": "data.price"
                      },
                      "category": {
                        "key": "data.category"
                      },
                      "dimensions": {
                        "map": {
                          "width": {
                            "key": "data.width_cm"
                          },
                          "height": {
                            "key": "data.height_cm"
                          },
                          "depth": {
                            "key": "data.depth_cm"
                          }
                        }
                      },
                      "internalScore": {
                        "key": "data.internal_score"
                      }
                    }
                  }
                }
              }
            }
          },
          "consent": {
            "analytics": true
          }
        }
      },
      "order": {
        "complete": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "commerce": {
                "map": {
                  "order": {
                    "map": {
                      "priceTotal": {
                        "key": "data.cart_total"
                      },
                      "purchaseID": {
                        "key": "data.order_id"
                      },
                      "currencyCode": {
                        "key": "data.currency"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "order": {
                    "map": {
                      "customerEmail": {
                        "key": "data.email",
                        "fn": [
                          "normalize.lowercase",
                          "hash.sha256"
                        ]
                      },
                      "productSku": {
                        "key": "data.product_sku"
                      },
                      "giftMessage": {
                        "key": "data.gift_message"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "commerce.purchases"
              }
            }
          },
          "consent": {
            "analytics": true
          },
          "condition": {
            "op": "matches",
            "left": {
              "path": "data.order_id"
            },
            "right": {
              "value": "^.+$"
            }
          },
          "identity": {
            "Email_LC_SHA256": [
              {
                "id": {
                  "key": "data.email",
                  "fn": [
                    "normalize.lowercase",
                    "hash.sha256"
                  ]
                },
                "authenticatedState": "ambiguous"
              }
            ]
          }
        }
      },
      "search": {
        "view": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "search": {
                "map": {
                  "keywords": {
                    "key": "data.search_term"
                  }
                }
              },
              "eventType": {
                "value": "xerashop.search"
              }
            }
          },
          "consent": {
            "analytics": true
          }
        }
      },
      "campaign": {
        "click": {
          "data": {
            "map": {
              "web": {
                "map": {
                  "webPageDetails": {
                    "map": {
                      "name": {
                        "key": "data.page_name"
                      },
                      "URL": {
                        "key": "data.page_url"
                      },
                      "siteSection": {
                        "key": "data.site_section"
                      }
                    }
                  }
                }
              },
              "_aeppsemea": {
                "map": {
                  "campaign": {
                    "map": {
                      "name": {
                        "key": "data.campaign_name"
                      },
                      "category": {
                        "key": "data.campaign_category"
                      },
                      "label": {
                        "key": "data.campaign_label"
                      },
                      "placement": {
                        "key": "data.campaign_placement"
                      },
                      "component": {
                        "key": "data.campaign_component"
                      },
                      "regionPath": {
                        "key": "data.campaign_region_path"
                      }
                    }
                  }
                }
              },
              "eventType": {
                "value": "web.webinteraction.linkClicks"
              }
            }
          },
          "consent": {
            "analytics": true
          }
        }
      }
    }
  },
  "ajvBundle": {
    "schemas": {
      "tgt_page_view": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/commerce.order.crosswalk.yaml@1.2.1 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "commerce": {
            "title": "Commerce",
            "type": "object",
            "properties": {
              "order": {
                "title": "Order",
                "type": "object",
                "properties": {
                  "priceTotal": {
                    "title": "Price Total",
                    "description": "The total price of this order after all discounts and taxes have been applied.",
                    "type": "number"
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "description": "Unique identifier assigned by the seller for this purchase or contract.",
                    "type": "string"
                  },
                  "currencyCode": {
                    "title": "Currency Code",
                    "description": "The ISO 4217 currency code used for this order.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "productSku": {
                    "title": "productSku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_product_view": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/commerce.order.crosswalk.yaml@1.2.1 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "commerce": {
            "title": "Commerce",
            "type": "object",
            "properties": {
              "order": {
                "title": "Order",
                "type": "object",
                "properties": {
                  "priceTotal": {
                    "title": "Price Total",
                    "description": "The total price of this order after all discounts and taxes have been applied.",
                    "type": "number"
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "description": "Unique identifier assigned by the seller for this purchase or contract.",
                    "type": "string"
                  },
                  "currencyCode": {
                    "title": "Currency Code",
                    "description": "The ISO 4217 currency code used for this order.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "productSku": {
                    "title": "productSku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_product_add": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/commerce.order.crosswalk.yaml@1.2.1 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "commerce": {
            "title": "Commerce",
            "type": "object",
            "properties": {
              "order": {
                "title": "Order",
                "type": "object",
                "properties": {
                  "priceTotal": {
                    "title": "Price Total",
                    "description": "The total price of this order after all discounts and taxes have been applied.",
                    "type": "number"
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "description": "Unique identifier assigned by the seller for this purchase or contract.",
                    "type": "string"
                  },
                  "currencyCode": {
                    "title": "Currency Code",
                    "description": "The ISO 4217 currency code used for this order.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "productSku": {
                    "title": "productSku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_order_event": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/commerce.order.crosswalk.yaml@1.2.1 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "commerce": {
            "title": "Commerce",
            "type": "object",
            "properties": {
              "order": {
                "title": "Order",
                "type": "object",
                "properties": {
                  "priceTotal": {
                    "title": "Price Total",
                    "description": "The total price of this order after all discounts and taxes have been applied.",
                    "type": "number"
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "description": "Unique identifier assigned by the seller for this purchase or contract.",
                    "type": "string"
                  },
                  "currencyCode": {
                    "title": "Currency Code",
                    "description": "The ISO 4217 currency code used for this order.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "productSku": {
                    "title": "productSku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_search_event": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/commerce.order.crosswalk.yaml@1.2.1 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "commerce": {
            "title": "Commerce",
            "type": "object",
            "properties": {
              "order": {
                "title": "Order",
                "type": "object",
                "properties": {
                  "priceTotal": {
                    "title": "Price Total",
                    "description": "The total price of this order after all discounts and taxes have been applied.",
                    "type": "number"
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "description": "Unique identifier assigned by the seller for this purchase or contract.",
                    "type": "string"
                  },
                  "currencyCode": {
                    "title": "Currency Code",
                    "description": "The ISO 4217 currency code used for this order.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "productSku": {
                    "title": "productSku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_campaign_event": {
        "title": "XDM ExperienceEvent",
        "description": "Generated from crosswalks/commerce.order.crosswalk.yaml@1.2.1 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "timestamp": {
            "title": "Timestamp",
            "type": "string",
            "format": "date-time"
          },
          "eventType": {
            "title": "Event Type",
            "type": "string"
          },
          "web": {
            "title": "Web",
            "type": "object",
            "properties": {
              "webPageDetails": {
                "title": "Web Page Details",
                "type": "object",
                "properties": {
                  "name": {
                    "title": "Name",
                    "description": "The normative name of the web page.",
                    "type": "string"
                  },
                  "URL": {
                    "title": "URL",
                    "description": "The URL of the web page.",
                    "type": "string",
                    "format": "uri"
                  },
                  "siteSection": {
                    "title": "Site Section",
                    "description": "The normative name of the site section where this web page resides.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "commerce": {
            "title": "Commerce",
            "type": "object",
            "properties": {
              "order": {
                "title": "Order",
                "type": "object",
                "properties": {
                  "priceTotal": {
                    "title": "Price Total",
                    "description": "The total price of this order after all discounts and taxes have been applied.",
                    "type": "number"
                  },
                  "purchaseID": {
                    "title": "Purchase ID",
                    "description": "Unique identifier assigned by the seller for this purchase or contract.",
                    "type": "string"
                  },
                  "currencyCode": {
                    "title": "Currency Code",
                    "description": "The ISO 4217 currency code used for this order.",
                    "type": "string"
                  }
                }
              }
            }
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "order": {
                "type": "object",
                "properties": {
                  "customerEmail": {
                    "title": "customerEmail",
                    "description": "Email address.",
                    "type": "string"
                  },
                  "productSku": {
                    "title": "productSku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "giftMessage": {
                    "title": "giftMessage",
                    "type": "string"
                  }
                }
              },
              "campaign": {
                "type": "object",
                "properties": {
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "label": {
                    "title": "label",
                    "description": "An alias for the item.",
                    "type": "string"
                  },
                  "placement": {
                    "title": "placement",
                    "type": "string"
                  },
                  "component": {
                    "title": "component",
                    "type": "string"
                  },
                  "regionPath": {
                    "title": "regionPath",
                    "type": "string"
                  }
                }
              }
            }
          },
          "search": {
            "title": "Search",
            "description": "The information related to web or mobile search.",
            "type": "object",
            "properties": {
              "searchEngine": {
                "title": "Search engine",
                "description": "The search engine used by the search.",
                "type": "string"
              },
              "searchEngineID": {
                "title": "Search engine ID",
                "description": "The application specified identifier used to identify the search engine used by the search.",
                "type": "string",
                "format": "uri"
              },
              "keywords": {
                "title": "Keywords",
                "description": "Keywords for the search.",
                "type": "string"
              },
              "isPaid": {
                "title": "Is paid",
                "description": "Indicate if the search is paid or not.",
                "type": "boolean"
              },
              "pageDepth": {
                "title": "Page depth",
                "description": "Page depth in the search results.",
                "type": "integer"
              },
              "slot": {
                "title": "Page slot",
                "description": "Named section of the page where the search result appeared, for example, top or side.",
                "type": "string"
              },
              "position": {
                "title": "Listing position",
                "description": "Position or rank of the listing in the search result page.",
                "type": "integer"
              }
            }
          }
        },
        "additionalProperties": true
      },
      "tgt_product_lookup": {
        "title": "Record Schema",
        "description": "Generated from crosswalks/commerce.product.crosswalk.yaml@1.0.0 — do not hand-edit (catalog:gen-fieldgroups).",
        "type": "object",
        "properties": {
          "_id": {
            "title": "Identifier",
            "type": "string",
            "format": "uri-reference"
          },
          "_aeppsemea": {
            "type": "object",
            "properties": {
              "product": {
                "type": "object",
                "properties": {
                  "sku": {
                    "title": "sku",
                    "description": "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.",
                    "type": "string"
                  },
                  "name": {
                    "title": "name",
                    "description": "The name of the item.",
                    "type": "string"
                  },
                  "price": {
                    "title": "price",
                    "description": "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\\n\\nUsage guidelines:\\n\\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. \"USD\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. \"BTC\"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. \"Ithaca HOUR\") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a \"content=\" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n      ",
                    "type": "number"
                  },
                  "category": {
                    "title": "category",
                    "description": "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.",
                    "type": "string"
                  },
                  "dimensions": {
                    "title": "commerce.product dimensions",
                    "description": "Generated tenant data type (nested structure, Addendum C §C9) — do not hand-edit (catalog:gen-fieldgroups).",
                    "type": "object",
                    "properties": {
                      "width": {
                        "title": "width",
                        "description": "The width of the item.",
                        "type": "number"
                      },
                      "height": {
                        "title": "height",
                        "description": "The height of the item.",
                        "type": "number"
                      },
                      "depth": {
                        "title": "depth",
                        "description": "The depth of the item.",
                        "type": "number"
                      }
                    }
                  },
                  "internalScore": {
                    "title": "internalScore",
                    "type": "number"
                  }
                }
              }
            }
          }
        },
        "additionalProperties": true
      }
    }
  }
};
