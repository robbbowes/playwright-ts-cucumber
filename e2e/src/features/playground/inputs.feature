Feature: As a user I can interact with autocomplete inputs

    @smoke
    @regression
    Scenario: As a user I can interact and assert on autocomplete inputs
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And I fill in the "movies autocomplete" input with "The G"
        And I click the "The Godfather" link
        And the "movies autocomplete" should contain the value "The Godfather"
        And the "movies autocomplete" should not contain the value "The Godfather: Part II"

    @smoke
    @regression
    Scenario: As a user I can interact and assert on inputs
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And the "outlined required" should equal the value "Testing"
        Then the "outlined disabled" should equal the value "Talks"
        And the "outlined readonly" should equal the value "Hub"
        And the "outlined required" should be enabled
        And the "outlined disabled" should not be enabled
        And I fill in the "outlined required" input with "Hello World!"
        Then the "outlined required" should equal the value "Hello World!"
        Then the "outlined required" should not equal the value "Goodbye World!"

    @smoke
    @regression
    Scenario: As a user I can interact and assert on input validation
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        Then the "outlined error label" should contain the text "Error"
        Then the "outlined error text" should contain the text "Incorrect entry"
        

