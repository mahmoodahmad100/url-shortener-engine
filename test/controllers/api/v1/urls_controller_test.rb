require "test_helper"

class Api::V1::UrlsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_urls_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_urls_show_url
    assert_response :success
  end
end
