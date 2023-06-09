Feature: As a user I can interact with iframes

    @dev
    @smoke
    @regression
    Scenario: As a user I can interact and assert on iframes
    Given I am on the "home" page
    And I click the "playground" button
    When I am directed to the "playground" page
    Then I fill in the "search" input on the "basic" iframe with "Hello"
    