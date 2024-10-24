// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductImplementation {
    enum ProductStatus { Created, Active, Inactive }

    struct Product {
        uint256 id;
        string name;
        ProductStatus status;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCount;

    function createProduct(string memory _name) public {
        productCount++;
        products[productCount] = Product(productCount, _name, ProductStatus.Created);
    }

    function getProduct(uint256 _id) public view returns (Product memory) {
        return products[_id];
    }

    function updateProductStatus(uint256 _id, ProductStatus _status) public {
        products[_id].status = _status;
    }
}