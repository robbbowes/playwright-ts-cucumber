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

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on inputs
        Given I am on the "home" page
        And I click the "playground" button
        When I am directed to the "playground" page
        And the "outlined required" should equal the value "Testing"

