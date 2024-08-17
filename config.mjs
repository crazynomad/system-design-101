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
      "text": "Communication protocols (README)",
      "link": "Chapter1.Communication_protocols/README.md",
      "items": [
        {
          "text": "REST API vs. GraphQL",
          "link": "Chapter1.Communication_protocols/1.REST_API_vs._GraphQL.md"
        },
        {
          "text": "How does gRPC work?",
          "link": "Chapter1.Communication_protocols/2.How_does_gRPC_work_.md"
        },
        {
          "text": "What is a webhook?",
          "link": "Chapter1.Communication_protocols/3.What_is_a_webhook_.md"
        },
        {
          "text": "How to improve API performance?",
          "link": "Chapter1.Communication_protocols/4.How_to_improve_API_performance_.md"
        },
        {
          "text": "HTTP 1.0 -> HTTP 1.1 -> HTTP 2.0 -> HTTP 3.0 (QUIC)",
          "link": "Chapter1.Communication_protocols/5.HTTP_1.0_-__HTTP_1.1_-__HTTP_2.0_-__HTTP_3.0_(QUIC).md"
        },
        {
          "text": "SOAP vs REST vs GraphQL vs RPC",
          "link": "Chapter1.Communication_protocols/6.SOAP_vs_REST_vs_GraphQL_vs_RPC.md"
        },
        {
          "text": "Code First vs. API First",
          "link": "Chapter1.Communication_protocols/7.Code_First_vs._API_First.md"
        },
        {
          "text": "HTTP status codes",
          "link": "Chapter1.Communication_protocols/8.HTTP_status_codes.md"
        },
        {
          "text": "What does API gateway do?",
          "link": "Chapter1.Communication_protocols/9.What_does_API_gateway_do_.md"
        },
        {
          "text": "How do we design effective and safe APIs?",
          "link": "Chapter1.Communication_protocols/10.How_do_we_design_effective_and_safe_APIs_.md"
        },
        {
          "text": "TCP/IP encapsulation",
          "link": "Chapter1.Communication_protocols/11.TCP_IP_encapsulation.md"
        },
        {
          "text": "Why is Nginx called a “reverse” proxy?",
          "link": "Chapter1.Communication_protocols/12.Why_is_Nginx_called_a_“reverse”_proxy_.md"
        },
        {
          "text": "What are the common load-balancing algorithms?",
          "link": "Chapter1.Communication_protocols/13.What_are_the_common_load-balancing_algorithms_.md"
        },
        {
          "text": "URL, URI, URN - Do you know the differences?",
          "link": "Chapter1.Communication_protocols/14.URL,_URI,_URN_-_Do_you_know_the_differences_.md"
        }
      ]
    },
    {
      "text": "CI/CD",
      "link": "Chapter2.CI_CD/",
      "items": [
        {
          "text": "CI/CD Pipeline Explained in Simple Terms",
          "link": "Chapter2.CI_CD/1.CI_CD_Pipeline_Explained_in_Simple_Terms.md"
        },
        {
          "text": "Netflix Tech Stack (CI/CD Pipeline)",
          "link": "Chapter2.CI_CD/2.Netflix_Tech_Stack_(CI_CD_Pipeline).md"
        }
      ]
    },
    {
      "text": "Architecture patterns",
      "link": "Chapter3.Architecture_patterns/",
      "items": [
        {
          "text": "MVC, MVP, MVVM, MVVM-C, and VIPER",
          "link": "Chapter3.Architecture_patterns/1.MVC,_MVP,_MVVM,_MVVM-C,_and_VIPER.md"
        },
        {
          "text": "18 Key Design Patterns Every Developer Should Know",
          "link": "Chapter3.Architecture_patterns/2.18_Key_Design_Patterns_Every_Developer_Should_Know.md"
        }
      ]
    },
    {
      "text": "Database",
      "link": "Chapter4.Database/",
      "items": [
        {
          "text": "A nice cheat sheet of different databases in cloud services",
          "link": "Chapter4.Database/1.A_nice_cheat_sheet_of_different_databases_in_cloud_services.md"
        },
        {
          "text": "8 Data Structures That Power Your Databases",
          "link": "Chapter4.Database/2.8_Data_Structures_That_Power_Your_Databases.md"
        },
        {
          "text": "How is an SQL statement executed in the database?",
          "link": "Chapter4.Database/3.How_is_an_SQL_statement_executed_in_the_database_.md"
        },
        {
          "text": "CAP theorem",
          "link": "Chapter4.Database/4.CAP_theorem.md"
        },
        {
          "text": "Types of Memory and Storage",
          "link": "Chapter4.Database/5.Types_of_Memory_and_Storage.md"
        },
        {
          "text": "Visualizing a SQL query",
          "link": "Chapter4.Database/6.Visualizing_a_SQL_query.md"
        },
        {
          "text": "SQL language",
          "link": "Chapter4.Database/7.SQL_language.md"
        }
      ]
    },
    {
      "text": "Cache",
      "link": "Chapter5.Cache/",
      "items": [
        {
          "text": "Data is cached everywhere",
          "link": "Chapter5.Cache/1.Data_is_cached_everywhere.md"
        },
        {
          "text": "Why is Redis so fast?",
          "link": "Chapter5.Cache/2.Why_is_Redis_so_fast_.md"
        },
        {
          "text": "How can Redis be used?",
          "link": "Chapter5.Cache/3.How_can_Redis_be_used_.md"
        },
        {
          "text": "Top caching strategies",
          "link": "Chapter5.Cache/4.Top_caching_strategies.md"
        }
      ]
    },
    {
      "text": "Microservice architecture",
      "link": "Chapter6.Microservice_architecture/",
      "items": [
        {
          "text": "What does a typical microservice architecture look like?",
          "link": "Chapter6.Microservice_architecture/1.What_does_a_typical_microservice_architecture_look_like_.md"
        },
        {
          "text": "Microservice Best Practices",
          "link": "Chapter6.Microservice_architecture/2.Microservice_Best_Practices.md"
        },
        {
          "text": "What tech stack is commonly used for microservices?",
          "link": "Chapter6.Microservice_architecture/3.What_tech_stack_is_commonly_used_for_microservices_.md"
        },
        {
          "text": "Why is Kafka fast",
          "link": "Chapter6.Microservice_architecture/4.Why_is_Kafka_fast.md"
        }
      ]
    },
    {
      "text": "Payment systems",
      "link": "Chapter7.Payment_systems/",
      "items": [
        {
          "text": "How to learn payment systems?",
          "link": "Chapter7.Payment_systems/1.How_to_learn_payment_systems_.md"
        },
        {
          "text": "Why is the credit card called “the most profitable product in banks”? How does VISA/Mastercard make money?",
          "link": "Chapter7.Payment_systems/2.Why_is_the_credit_card_called_“the_most_profitable_product_in_banks”__How_does_VISA_Mastercard_make_money_.md"
        },
        {
          "text": "How does VISA work when we swipe a credit card at a merchant’s shop?",
          "link": "Chapter7.Payment_systems/3.How_does_VISA_work_when_we_swipe_a_credit_card_at_a_merchant’s_shop_.md"
        },
        {
          "text": "Payment Systems Around The World Series (Part 1): Unified Payments Interface (UPI) in India",
          "link": "Chapter7.Payment_systems/4.Payment_Systems_Around_The_World_Series_(Part_1)__Unified_Payments_Interface_(UPI)_in_India.md"
        }
      ]
    },
    {
      "text": "DevOps",
      "link": "Chapter8.DevOps/",
      "items": [
        {
          "text": "DevOps vs. SRE vs. Platform Engineering. What is the difference?",
          "link": "Chapter8.DevOps/1.DevOps_vs._SRE_vs._Platform_Engineering._What_is_the_difference_.md"
        },
        {
          "text": "What is k8s (Kubernetes)?",
          "link": "Chapter8.DevOps/2.What_is_k8s_(Kubernetes)_.md"
        },
        {
          "text": "Docker vs. Kubernetes. Which one should we use?",
          "link": "Chapter8.DevOps/3.Docker_vs._Kubernetes._Which_one_should_we_use_.md"
        },
        {
          "text": "How does Docker work?",
          "link": "Chapter8.DevOps/4.How_does_Docker_work_.md"
        }
      ]
    },
    {
      "text": "GIT",
      "link": "Chapter9.GIT/",
      "items": [
        {
          "text": "How Git Commands work",
          "link": "Chapter9.GIT/1.How_Git_Commands_work.md"
        },
        {
          "text": "How does Git Work?",
          "link": "Chapter9.GIT/2.How_does_Git_Work_.md"
        },
        {
          "text": "Git merge vs. Git rebase",
          "link": "Chapter9.GIT/3.Git_merge_vs._Git_rebase.md"
        }
      ]
    },
    {
      "text": "Cloud Services",
      "link": "Chapter10.Cloud_Services/",
      "items": [
        {
          "text": "A nice cheat sheet of different cloud services (2023 edition)",
          "link": "Chapter10.Cloud_Services/1.A_nice_cheat_sheet_of_different_cloud_services_(2023_edition).md"
        },
        {
          "text": "What is cloud native?",
          "link": "Chapter10.Cloud_Services/2.What_is_cloud_native_.md"
        }
      ]
    },
    {
      "text": "Developer productivity tools",
      "link": "Chapter11.Developer_productivity_tools/",
      "items": [
        {
          "text": "Visualize JSON files",
          "link": "Chapter11.Developer_productivity_tools/1.Visualize_JSON_files.md"
        },
        {
          "text": "Automatically turn code into architecture diagrams",
          "link": "Chapter11.Developer_productivity_tools/2.Automatically_turn_code_into_architecture_diagrams.md"
        }
      ]
    },
    {
      "text": "Linux",
      "link": "Chapter12.Linux/",
      "items": [
        {
          "text": "Linux file system explained",
          "link": "Chapter12.Linux/1.Linux_file_system_explained.md"
        },
        {
          "text": "18 Most-used Linux Commands You Should Know",
          "link": "Chapter12.Linux/2.18_Most-used_Linux_Commands_You_Should_Know.md"
        }
      ]
    },
    {
      "text": "Security",
      "link": "Chapter13.Security/",
      "items": [
        {
          "text": "How does HTTPS work?",
          "link": "Chapter13.Security/1.How_does_HTTPS_work_.md"
        },
        {
          "text": "Oauth 2.0 Explained With Simple Terms.",
          "link": "Chapter13.Security/2.Oauth_2.0_Explained_With_Simple_Terms..md"
        },
        {
          "text": "Top 4 Forms of Authentication Mechanisms",
          "link": "Chapter13.Security/3.Top_4_Forms_of_Authentication_Mechanisms.md"
        },
        {
          "text": "Session, cookie, JWT, token, SSO, and OAuth 2.0 - what are they?",
          "link": "Chapter13.Security/4.Session,_cookie,_JWT,_token,_SSO,_and_OAuth_2.0_-_what_are_they_.md"
        },
        {
          "text": "How to store passwords safely in the database and how to validate a password?",
          "link": "Chapter13.Security/5.How_to_store_passwords_safely_in_the_database_and_how_to_validate_a_password_.md"
        },
        {
          "text": "Explaining JSON Web Token (JWT) to a 10 year old Kid",
          "link": "Chapter13.Security/6.Explaining_JSON_Web_Token_(JWT)_to_a_10_year_old_Kid.md"
        },
        {
          "text": "How does Google Authenticator (or other types of 2-factor authenticators) work?",
          "link": "Chapter13.Security/7.How_does_Google_Authenticator_(or_other_types_of_2-factor_authenticators)_work_.md"
        }
      ]
    },
    {
      "text": "Real World Case Studies",
      "link": "Chapter14.Real_World_Case_Studies/",
      "items": [
        {
          "text": "Netflix's Tech Stack",
          "link": "Chapter14.Real_World_Case_Studies/1.Netflix's_Tech_Stack.md"
        },
        {
          "text": "Twitter Architecture 2022",
          "link": "Chapter14.Real_World_Case_Studies/2.Twitter_Architecture_2022.md"
        },
        {
          "text": "Evolution of Airbnb’s microservice architecture over the past 15 years",
          "link": "Chapter14.Real_World_Case_Studies/3.Evolution_of_Airbnb’s_microservice_architecture_over_the_past_15_years.md"
        },
        {
          "text": "Monorepo vs. Microrepo.",
          "link": "Chapter14.Real_World_Case_Studies/4.Monorepo_vs._Microrepo..md"
        },
        {
          "text": "How will you design the Stack Overflow website?",
          "link": "Chapter14.Real_World_Case_Studies/5.How_will_you_design_the_Stack_Overflow_website_.md"
        },
        {
          "text": "Why did Amazon Prime Video monitoring move from serverless to monolithic? How can it save 90% cost?",
          "link": "Chapter14.Real_World_Case_Studies/6.Why_did_Amazon_Prime_Video_monitoring_move_from_serverless_to_monolithic__How_can_it_save_90%_cost_.md"
        },
        {
          "text": "How does Disney Hotstar capture 5 Billion Emojis during a tournament?",
          "link": "Chapter14.Real_World_Case_Studies/7.How_does_Disney_Hotstar_capture_5_Billion_Emojis_during_a_tournament_.md"
        },
        {
          "text": "How Discord Stores Trillions Of Messages",
          "link": "Chapter14.Real_World_Case_Studies/8.How_Discord_Stores_Trillions_Of_Messages.md"
        },
        {
          "text": "How do video live streamings work on YouTube, TikTok live, or Twitch?",
          "link": "Chapter14.Real_World_Case_Studies/9.How_do_video_live_streamings_work_on_YouTube,_TikTok_live,_or_Twitch_.md"
        }
      ]
    },
    {
      "text": "License (README)",
      "link": "Chapter15.License/README.md",
      "items": []
    }
  ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
