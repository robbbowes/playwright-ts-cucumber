Feature: As a user I can interact with checkboxes

    @smoke
    @regression
    Scenario: As a user I can interact and assert on checkboxes
    Given I am on the "home" page
    And I click the "playground" button
    Then I am directed to the "playground" page
    And the "blue" checkbox should not be checked
    Then I check the "blue" checkbox
    Then the "blue" checkbox should be checked
    When I uncheck the "blue" checkbox
    Then the "blue" checkbox should not be checked
