Feature: Google
    I want to open a social network page
  
    @focus
    Scenario: Opening Google
        Given I open Google page
        Then I see "Google" in the title
    @focus
    Scenario: Googleing something via pressing enter
        Given I open Google page
        Then I see a search bar, type "Hello World" in it and press enter
        Then I see "Hello World - Google Search" in the title
