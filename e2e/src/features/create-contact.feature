Feature: As a user I expect to be able to create contacts

    @dev
    Scenario: As a user I expect to be able to create a new contact
        Given I am on the "home" page
        And I click the "create" button
        Then I am directed to the "create contact" page
        And the "create contact header" should contain the text "Create Contact"

        When I fill in the "name" input with "Uncle Ted"
        And I select the "Male" option from the "gender" dropdown
        And I fill in the "phone" input with "0123456789"
        And I fill in the "street" input with "123 Fake Street"
        And I fill in the "city" input with "Faketown"
        And I click the "save" button
        Then I am directed to the "home" page

        When I fill in the "search" input with "Uncle Ted"
        Then the "full name label" should contain the text "Name:"
        And the "name" should contain the text "Uncle Ted"
        And the "gender label" should contain the text "Gender:"
        And the "gender" should contain the text "Male"
        And the "address label" should contain the text "Address:"
        And the "address" should contain the text "123 Fake Street"
        And the "address" should contain the text "Faketown"

        And the "edit button" should be displayed
        And the "delete button" should be displayed
