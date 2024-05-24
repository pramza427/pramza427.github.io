(ns resume.views
  (:require
    [re-frame.core :as rf]
    [reagent.core :as rc]))

(def projects
  [{:name "Audio Adjuster" :img-src "" :language "Python" :repo-link "https://github.com/pramza427/keybow_pycaw" :web-link "" :description "Python script that allows for quick Windows audio adjustment using a Keybow 2040"}
   {:name "Clojure Darts Scoreboard" :img-src "public/imgs/501-cljs.jpg" :language "Clojurescript" :repo-link "https://github.com/pramza427/darts-reframe" :web-link "https://pramza427.github.io/darts-reframe/"
    :description "An improved way for users to keep track of scores in dart games. Now includes dark mode and an undo button, as well as general UI improvements. Hope to add player stat tracking soon."}
   {:name "Darts Scoreboard" :img-src "public/imgs/501.jpg" :language "HTML, Javascript" :repo-link "https://github.com/pramza427/Dart-Games" :web-link "https://pramza427.github.io/Dart-Games/501.html" :description "A quick and easy way for users to keep track of scores in dart games"}
   {:name "HighwayRush" :img-src "public/imgs/HighwayRush.jpg" :language "HTML, Javascript" :repo-link "https://github.com/pramza427/Highway-Rush" :web-link "https://pramza427.github.io/Highway-Rush" :description "A downloadable side scroller where you race down the highway avoiding other cars and picking up gas to try and get the highest score"}
   {:name "RecipeFinder" :img-src "public/imgs/RecipeFinder.jpg" :language "HTML, Javascript" :repo-link "https://github.com/pramza427/RecipeFinder" :web-link "https://pramza427.github.io/RecipeFinder/index.html" :description "Uses a recipe API to quickly and easily filter through recipes and display them to the user"}
   {:name "Auto Reviews" :img-src "public/imgs/AutoReviews.jpg" :language "HTML, Javascript, Python" :repo-link "https://github.com/pramza427/Review-Generator" :web-link "https://pramza427.github.io/Review-Generator/" :description "Fun little project that took Disneyland reviews to create a markov model and used that to generate reviews based on which star rating the user chooses"}
   {:name "Craft Piggy Bank" :img-src "public/imgs/craft-piggy-bank.jpg" :language "Clojurescript" :repo-link "https://github.com/pramza427/craft-piggy-bank" :web-link "https://pramza427.github.io/craft-piggy-bank/" :description "Track your time doing projects and \"earn\" money to spend on your hobbies"}])

;; ---------- Helpers ----------

(defn set-local-storage [key val]
      (.setItem (.-localStorage js/window) key val))

(defn get-local-storage [key]
      (.getItem (.-localStorage js/window) key))

;; ---------- Subscriptions ----------
(rf/reg-sub
  ::current-tab
  (fn [db [_]]
      (or (get db :current-tab) :projects)))

(rf/reg-sub
  ::dark-mode?
  (fn [db [_]]
      (get db :dark-mode)))

;; ---------- Events ----------
(rf/reg-event-db
  ::set-current-tab
  (fn [db [_ tab]]
      (assoc db :current-tab tab)))

(rf/reg-event-db
  ::toggle-dark-mode
  (fn [db [_]]
      (let [dark? (or (get-local-storage "dark") "true")
            state (if (= dark? "true") false true)]
           (set-local-storage "dark" state)
           (.classList.toggle (js/document.getElementById "app") "dark")
           (assoc db :dark-mode state))))

;; ---------- Views ----------
(defn top-bar []
      (let [dark-mode? @(rf/subscribe [::dark-mode?])]
           [:div.w-full.min-h-full.flex-col.flex-center.font-bold.relative.text-gray-100
            {:style {:background-image
                     (if dark-mode?
                       "linear-gradient(to bottom right, #10423E, #030F11)"
                       "linear-gradient(to bottom right, #4A16E9, #9133FF)")}}
            [:div.text-3xl.md:text-6xl.mb-4 "Piotr Ramza"]
            [:div.text-xl.md:text-3xl.mb-12 "Programmer | Maker | Photographer"]
            [:div.flex.w-96.justify-evenly
             [:a.fa.fa-github.fa-3x {:href "https://github.com/pramza427"}]
             [:a.fa.fa-linkedin.fa-3x {:href "https://www.linkedin.com/in/piotrramza/"}]
             [:a.fa.fa-instagram.fa-3x {:href "https://www.instagram.com/p_ramza/"}]]
            [:div.absolute.top-5.right-5.cursor-pointer
             [:i.fas.fa-xl
              {:class (if dark-mode?
                        "fa-sun"
                        "fa-moon")
               :on-click #(rf/dispatch [::toggle-dark-mode])}]]
            [:div.w-full.flex.justify-center.absolute.bottom-8
             [:div.animate-bounce
              [:i.fas.fa-arrow-down.fa-2xl]]]
            ]))

(defn about-me []
      [:div.flex.flex-col.md:flex-row.p-10.bg-gray-200.dark:bg-slate-900
       [:div.flex.justify-center.items-center.max-w-full.md:max-w-min
        [:div.w-20.h-20.rounded-full.bg-blue-500
         {:style {:min-height "20rem"
                  :min-width "20rem"}}
         [:img.rounded-full {:src "public/imgs/Me.jpg"}]]]
       [:div.flex.flex-col.justify-center.w-full.md:px-10
        [:div.text-3xl.mb-4 "A Bit About Me:"]
        [:div.text-2xl
         "I’m a software developer with two years professional experience and a passion for making, whether that be physical or virtual. I enjoy tackling problems with creative solutions through exploration of new technologies. I have worked on a multitude of projects ranging in scale from individual to working on a team with dozens of people. I love sitting down, coding, and making something new."]]])

(defn card [{:keys [name img-src repo-link web-link description language]}]
      [:div.inline-block.border.rounded-lg.m-5.max-w-md.bg-white.border-gray-300.dark:border-slate-800.dark:bg-slate-900
       (when (not-empty img-src)
         [:img.rounded-t-lg.w-full.h-full {:src img-src}])
       [:div.p-3.rounded-b-lg
        [:div.text-xl.mb-2 name]
        [:div.text description]
        [:div.text-xs.text-gray-400.mt-2.text-right (str "Languages: " language)]
        [:div.flex.w-full.justify-between.mt-3
         [:a.mx-3.text-blue-500.hover:underline {:href repo-link} "Repository"]
         (when (not-empty web-link)
           [:a.mx-3.text-blue-500.hover:underline {:href web-link} "Website"])
         ]]])

(defn cards-wrapper []
      [:div.flex.flex-wrap.items-center.justify-center.w-full.px-20
       [:div.columns-1.lg:columns-2.xl:columns-3.2xl:columns-4
        (doall
          (for [project projects]
               ^{:key (:name project)}
               [card project]))]])

(defn experience []
      [:div.m-10
       [:div#xledger
        [:div.flex.justify-between
         [:div.text-3xl "Software Developer at Xledger Inc"]
         [:div.text-gray-400.text-lg "September 2021 - August 2023"]]
        [:div.text-gray-400.text-lg "Clojure, Clojurescript, HTML, Javascript, C#, SQL"]
        [:div.text-xl.mt-3 "Worked for two years as a mainly front end developer for Xledger Inc.
        I learned Clojurescript within my first week and a half at the company and proceeded to improve functionality
        of existing screens as well as creating a multitude of new utilities. Although most of the work I did was
        front end, I was also tasked with some backend and full stack issues that I am very proud of."]
        [:ul.list-disc.ml-5.text-xl.mt-3
         [:li "Assisted in the overhaul of a fully customizable report generator that converted custom XML to a PDF format using Skia, improving the speed over the old implementation by at least 10 times."]
         [:li "Developed a full stack implementation of an API that allowed users to create hierarchical tags, and add them to custom search templates, allowing for easier organization and searching between department levels."]
         [:li "Created a filtering system for dashboard elements that allowed users to specify relevant information to display via communications with the backend."]
         [:li "Built and improved a multitude of user facing screens, ranging from minor visual bug fixes to creation of fully functional utilities that thousands of customers used daily."]]]
       [:div#projects.mt-10
        [:div.text-3xl "Other Projects"]
        [:ul.list-disc.ml-5.mt-3.text-xl
         [:li "Worked with Array of Things to create an arduino sensor node responsible for collecting mass data from around my school, filtering and graphing thousands of data points in Excel."]
         [:li "Developed multiple full stack Android projects which incorporated permissions, saved instances, interfaces, threading, and a server client relationship."]
         [:li "Assembled an external automated switch to toggle a light switch from my phone using arduino."]
         [:li "Utilized scrum methodology with a small group of peers to create a playable demo of a top down puzzle game in Java."]]
        ]
       ])

(defn footer []
      (let [dark-mode? @(rf/subscribe [::dark-mode?])]
           [:div.flex.flex-center.p-4.text-gray-100
            {:style {:background-image
                     (if dark-mode?
                       "linear-gradient(to bottom right, #030F11, #10423E)"
                       "linear-gradient(to bottom right, #4A16E9, #9133FF)")}}
            [:div.select-none.mr-3 "Contact me at:"]
            [:div "pramza427@gmail.com"]]))

(defn main-panel []
  (let [current-tab @(rf/subscribe [::current-tab])]
    [:div.flex.flex-col.font-serif.bg-gray-100.dark:bg-slate-950.dark:text-gray-300.overflow-auto.scrollbar-thin
     {:style {:width "100vw" :height "100vh"}}
     [top-bar]
     [about-me]
     [:div.flex.flex-center.p-3.text-2xl
      [:div.flex.cursor-pointer
       [:div.p-1.px-4.border-b-4
        {:class (if (= current-tab :projects)
                  "border-purple-800 dark:border-teal-800"
                  "border-transparent hover:border-purple-400 dark:hover:border-teal-950")
         :on-click #(rf/dispatch [::set-current-tab :projects])}
        "Projects"]
       [:div.p-1.px-4.border-b-4
        {:class (if (= current-tab :experience)
                  "border-purple-800 dark:border-teal-800"
                  "border-transparent hover:border-purple-400 dark:hover:border-teal-950")
         :on-click #(rf/dispatch [::set-current-tab :experience])}
        "Experience"]]]
     (case current-tab
       :projects [cards-wrapper]
       :experience [experience]
       [cards-wrapper])
     [:div.flex-grow]
     [footer]]))

