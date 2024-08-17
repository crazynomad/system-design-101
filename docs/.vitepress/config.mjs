import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    "sidebar": [
    {
      "text": "Chapter1.Communication protocols",
      "link": "Chapter1.Communication_s_protocols/README.md",
      "items": [
        {
          "text": "REST API vs. GraphQL",
          "link": "Chapter1.Communication_s_protocols/1.REST_s_API_s_vs_dot__s_GraphQL.md"
        },
        {
          "text": "How does gRPC work?",
          "link": "Chapter1.Communication_s_protocols/2.How_s_does_s_gRPC_s_work_q_.md"
        },
        {
          "text": "What is a webhook?",
          "link": "Chapter1.Communication_s_protocols/3.What_s_is_s_a_s_webhook_q_.md"
        },
        {
          "text": "How to improve API performance?",
          "link": "Chapter1.Communication_s_protocols/4.How_s_to_s_improve_s_API_s_performance_q_.md"
        },
        {
          "text": "HTTP 1.0 -> HTTP 1.1 -> HTTP 2.0 -> HTTP 3.0 (QUIC)",
          "link": "Chapter1.Communication_s_protocols/5.HTTP_s_1_dot_0_s_-_gt__s_HTTP_s_1_dot_1_s_-_gt__s_HTTP_s_2_dot_0_s_-_gt__s_HTTP_s_3_dot_0_s_(QUIC).md"
        },
        {
          "text": "SOAP vs REST vs GraphQL vs RPC",
          "link": "Chapter1.Communication_s_protocols/6.SOAP_s_vs_s_REST_s_vs_s_GraphQL_s_vs_s_RPC.md"
        },
        {
          "text": "Code First vs. API First",
          "link": "Chapter1.Communication_s_protocols/7.Code_s_First_s_vs_dot__s_API_s_First.md"
        },
        {
          "text": "HTTP status codes",
          "link": "Chapter1.Communication_s_protocols/8.HTTP_s_status_s_codes.md"
        },
        {
          "text": "What does API gateway do?",
          "link": "Chapter1.Communication_s_protocols/9.What_s_does_s_API_s_gateway_s_do_q_.md"
        },
        {
          "text": "How do we design effective and safe APIs?",
          "link": "Chapter1.Communication_s_protocols/10.How_s_do_s_we_s_design_s_effective_s_and_s_safe_s_APIs_q_.md"
        },
        {
          "text": "TCP/IP encapsulation",
          "link": "Chapter1.Communication_s_protocols/11.TCP_fs_IP_s_encapsulation.md"
        },
        {
          "text": "Why is Nginx called a “reverse” proxy?",
          "link": "Chapter1.Communication_s_protocols/12.Why_s_is_s_Nginx_s_called_s_a_s_“reverse”_s_proxy_q_.md"
        },
        {
          "text": "What are the common load-balancing algorithms?",
          "link": "Chapter1.Communication_s_protocols/13.What_s_are_s_the_s_common_s_load-balancing_s_algorithms_q_.md"
        },
        {
          "text": "URL, URI, URN - Do you know the differences?",
          "link": "Chapter1.Communication_s_protocols/14.URL,_s_URI,_s_URN_s_-_s_Do_s_you_s_know_s_the_s_differences_q_.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter2.CI/CD",
      "link": "Chapter2.CI_fs_CD/",
      "items": [
        {
          "text": "CI/CD Pipeline Explained in Simple Terms",
          "link": "Chapter2.CI_fs_CD/1.CI_fs_CD_s_Pipeline_s_Explained_s_in_s_Simple_s_Terms.md"
        },
        {
          "text": "Netflix Tech Stack (CI/CD Pipeline)",
          "link": "Chapter2.CI_fs_CD/2.Netflix_s_Tech_s_Stack_s_(CI_fs_CD_s_Pipeline).md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter3.Architecture patterns",
      "link": "Chapter3.Architecture_s_patterns/",
      "items": [
        {
          "text": "MVC, MVP, MVVM, MVVM-C, and VIPER",
          "link": "Chapter3.Architecture_s_patterns/1.MVC,_s_MVP,_s_MVVM,_s_MVVM-C,_s_and_s_VIPER.md"
        },
        {
          "text": "18 Key Design Patterns Every Developer Should Know",
          "link": "Chapter3.Architecture_s_patterns/2.18_s_Key_s_Design_s_Patterns_s_Every_s_Developer_s_Should_s_Know.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter4.Database",
      "link": "Chapter4.Database/",
      "items": [
        {
          "text": "A nice cheat sheet of different databases in cloud services",
          "link": "Chapter4.Database/1.A_s_nice_s_cheat_s_sheet_s_of_s_different_s_databases_s_in_s_cloud_s_services.md"
        },
        {
          "text": "8 Data Structures That Power Your Databases",
          "link": "Chapter4.Database/2.8_s_Data_s_Structures_s_That_s_Power_s_Your_s_Databases.md"
        },
        {
          "text": "How is an SQL statement executed in the database?",
          "link": "Chapter4.Database/3.How_s_is_s_an_s_SQL_s_statement_s_executed_s_in_s_the_s_database_q_.md"
        },
        {
          "text": "CAP theorem",
          "link": "Chapter4.Database/4.CAP_s_theorem.md"
        },
        {
          "text": "Types of Memory and Storage",
          "link": "Chapter4.Database/5.Types_s_of_s_Memory_s_and_s_Storage.md"
        },
        {
          "text": "Visualizing a SQL query",
          "link": "Chapter4.Database/6.Visualizing_s_a_s_SQL_s_query.md"
        },
        {
          "text": "SQL language",
          "link": "Chapter4.Database/7.SQL_s_language.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter5.Cache",
      "link": "Chapter5.Cache/",
      "items": [
        {
          "text": "Data is cached everywhere",
          "link": "Chapter5.Cache/1.Data_s_is_s_cached_s_everywhere.md"
        },
        {
          "text": "Why is Redis so fast?",
          "link": "Chapter5.Cache/2.Why_s_is_s_Redis_s_so_s_fast_q_.md"
        },
        {
          "text": "How can Redis be used?",
          "link": "Chapter5.Cache/3.How_s_can_s_Redis_s_be_s_used_q_.md"
        },
        {
          "text": "Top caching strategies",
          "link": "Chapter5.Cache/4.Top_s_caching_s_strategies.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter6.Microservice architecture",
      "link": "Chapter6.Microservice_s_architecture/",
      "items": [
        {
          "text": "What does a typical microservice architecture look like?",
          "link": "Chapter6.Microservice_s_architecture/1.What_s_does_s_a_s_typical_s_microservice_s_architecture_s_look_s_like_q_.md"
        },
        {
          "text": "Microservice Best Practices",
          "link": "Chapter6.Microservice_s_architecture/2.Microservice_s_Best_s_Practices.md"
        },
        {
          "text": "What tech stack is commonly used for microservices?",
          "link": "Chapter6.Microservice_s_architecture/3.What_s_tech_s_stack_s_is_s_commonly_s_used_s_for_s_microservices_q_.md"
        },
        {
          "text": "Why is Kafka fast",
          "link": "Chapter6.Microservice_s_architecture/4.Why_s_is_s_Kafka_s_fast.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter7.Payment systems",
      "link": "Chapter7.Payment_s_systems/",
      "items": [
        {
          "text": "How to learn payment systems?",
          "link": "Chapter7.Payment_s_systems/1.How_s_to_s_learn_s_payment_s_systems_q_.md"
        },
        {
          "text": "Why is the credit card called “the most profitable product in banks”? How does VISA/Mastercard make money?",
          "link": "Chapter7.Payment_s_systems/2.Why_s_is_s_the_s_credit_s_card_s_called_s_“the_s_most_s_profitable_s_product_s_in_s_banks”_q__s_How_s_does_s_VISA_fs_Mastercard_s_make_s_money_q_.md"
        },
        {
          "text": "How does VISA work when we swipe a credit card at a merchant’s shop?",
          "link": "Chapter7.Payment_s_systems/3.How_s_does_s_VISA_s_work_s_when_s_we_s_swipe_s_a_s_credit_s_card_s_at_s_a_s_merchant’s_s_shop_q_.md"
        },
        {
          "text": "Payment Systems Around The World Series (Part 1): Unified Payments Interface (UPI) in India",
          "link": "Chapter7.Payment_s_systems/4.Payment_s_Systems_s_Around_s_The_s_World_s_Series_s_(Part_s_1)_c__s_Unified_s_Payments_s_Interface_s_(UPI)_s_in_s_India.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter8.DevOps",
      "link": "Chapter8.DevOps/",
      "items": [
        {
          "text": "DevOps vs. SRE vs. Platform Engineering. What is the difference?",
          "link": "Chapter8.DevOps/1.DevOps_s_vs_dot__s_SRE_s_vs_dot__s_Platform_s_Engineering_dot__s_What_s_is_s_the_s_difference_q_.md"
        },
        {
          "text": "What is k8s (Kubernetes)?",
          "link": "Chapter8.DevOps/2.What_s_is_s_k8s_s_(Kubernetes)_q_.md"
        },
        {
          "text": "Docker vs. Kubernetes. Which one should we use?",
          "link": "Chapter8.DevOps/3.Docker_s_vs_dot__s_Kubernetes_dot__s_Which_s_one_s_should_s_we_s_use_q_.md"
        },
        {
          "text": "How does Docker work?",
          "link": "Chapter8.DevOps/4.How_s_does_s_Docker_s_work_q_.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter9.GIT",
      "link": "Chapter9.GIT/",
      "items": [
        {
          "text": "How Git Commands work",
          "link": "Chapter9.GIT/1.How_s_Git_s_Commands_s_work.md"
        },
        {
          "text": "How does Git Work?",
          "link": "Chapter9.GIT/2.How_s_does_s_Git_s_Work_q_.md"
        },
        {
          "text": "Git merge vs. Git rebase",
          "link": "Chapter9.GIT/3.Git_s_merge_s_vs_dot__s_Git_s_rebase.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter10.Cloud Services",
      "link": "Chapter10.Cloud_s_Services/",
      "items": [
        {
          "text": "A nice cheat sheet of different cloud services (2023 edition)",
          "link": "Chapter10.Cloud_s_Services/1.A_s_nice_s_cheat_s_sheet_s_of_s_different_s_cloud_s_services_s_(2023_s_edition).md"
        },
        {
          "text": "What is cloud native?",
          "link": "Chapter10.Cloud_s_Services/2.What_s_is_s_cloud_s_native_q_.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter11.Developer productivity tools",
      "link": "Chapter11.Developer_s_productivity_s_tools/",
      "items": [
        {
          "text": "Visualize JSON files",
          "link": "Chapter11.Developer_s_productivity_s_tools/1.Visualize_s_JSON_s_files.md"
        },
        {
          "text": "Automatically turn code into architecture diagrams",
          "link": "Chapter11.Developer_s_productivity_s_tools/2.Automatically_s_turn_s_code_s_into_s_architecture_s_diagrams.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter12.Linux",
      "link": "Chapter12.Linux/",
      "items": [
        {
          "text": "Linux file system explained",
          "link": "Chapter12.Linux/1.Linux_s_file_s_system_s_explained.md"
        },
        {
          "text": "18 Most-used Linux Commands You Should Know",
          "link": "Chapter12.Linux/2.18_s_Most-used_s_Linux_s_Commands_s_You_s_Should_s_Know.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter13.Security",
      "link": "Chapter13.Security/",
      "items": [
        {
          "text": "How does HTTPS work?",
          "link": "Chapter13.Security/1.How_s_does_s_HTTPS_s_work_q_.md"
        },
        {
          "text": "Oauth 2.0 Explained With Simple Terms.",
          "link": "Chapter13.Security/2.Oauth_s_2_dot_0_s_Explained_s_With_s_Simple_s_Terms_dot_.md"
        },
        {
          "text": "Top 4 Forms of Authentication Mechanisms",
          "link": "Chapter13.Security/3.Top_s_4_s_Forms_s_of_s_Authentication_s_Mechanisms.md"
        },
        {
          "text": "Session, cookie, JWT, token, SSO, and OAuth 2.0 - what are they?",
          "link": "Chapter13.Security/4.Session,_s_cookie,_s_JWT,_s_token,_s_SSO,_s_and_s_OAuth_s_2_dot_0_s_-_s_what_s_are_s_they_q_.md"
        },
        {
          "text": "How to store passwords safely in the database and how to validate a password?",
          "link": "Chapter13.Security/5.How_s_to_s_store_s_passwords_s_safely_s_in_s_the_s_database_s_and_s_how_s_to_s_validate_s_a_s_password_q_.md"
        },
        {
          "text": "Explaining JSON Web Token (JWT) to a 10 year old Kid",
          "link": "Chapter13.Security/6.Explaining_s_JSON_s_Web_s_Token_s_(JWT)_s_to_s_a_s_10_s_year_s_old_s_Kid.md"
        },
        {
          "text": "How does Google Authenticator (or other types of 2-factor authenticators) work?",
          "link": "Chapter13.Security/7.How_s_does_s_Google_s_Authenticator_s_(or_s_other_s_types_s_of_s_2-factor_s_authenticators)_s_work_q_.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter14.Real World Case Studies",
      "link": "Chapter14.Real_s_World_s_Case_s_Studies/",
      "items": [
        {
          "text": "Netflix's Tech Stack",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/1.Netflix's_s_Tech_s_Stack.md"
        },
        {
          "text": "Twitter Architecture 2022",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/2.Twitter_s_Architecture_s_2022.md"
        },
        {
          "text": "Evolution of Airbnb’s microservice architecture over the past 15 years",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/3.Evolution_s_of_s_Airbnb’s_s_microservice_s_architecture_s_over_s_the_s_past_s_15_s_years.md"
        },
        {
          "text": "Monorepo vs. Microrepo.",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/4.Monorepo_s_vs_dot__s_Microrepo_dot_.md"
        },
        {
          "text": "How will you design the Stack Overflow website?",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/5.How_s_will_s_you_s_design_s_the_s_Stack_s_Overflow_s_website_q_.md"
        },
        {
          "text": "Why did Amazon Prime Video monitoring move from serverless to monolithic? How can it save 90% cost?",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/6.Why_s_did_s_Amazon_s_Prime_s_Video_s_monitoring_s_move_s_from_s_serverless_s_to_s_monolithic_q__s_How_s_can_s_it_s_save_s_90_perc__s_cost_q_.md"
        },
        {
          "text": "How does Disney Hotstar capture 5 Billion Emojis during a tournament?",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/7.How_s_does_s_Disney_s_Hotstar_s_capture_s_5_s_Billion_s_Emojis_s_during_s_a_s_tournament_q_.md"
        },
        {
          "text": "How Discord Stores Trillions Of Messages",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/8.How_s_Discord_s_Stores_s_Trillions_s_Of_s_Messages.md"
        },
        {
          "text": "How do video live streamings work on YouTube, TikTok live, or Twitch?",
          "link": "Chapter14.Real_s_World_s_Case_s_Studies/9.How_s_do_s_video_s_live_s_streamings_s_work_s_on_s_YouTube,_s_TikTok_s_live,_s_or_s_Twitch_q_.md"
        }
      ],
      "collapsed": true
    },
    {
      "text": "Chapter15.License",
      "link": "Chapter15.License/README.md",
      "items": [],
      "collapsed": true
    }
  ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
