Feature: User should be able to save a mockup successfully
  As a user
  I want to create and save mockup
  So that I can access the saved mockup

  @javascript
  Scenario: New project should be created
    Given I access home page
    When I provide project name
    And I create the project
    Then new project should be created

