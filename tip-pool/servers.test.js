describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should return undefined when no new servers are added to allServers on submitServerInfo()", function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should create a new table row that contains the server name and the tip amount", function () {
    submitServerInfo();
    updateServerTable();
    let newTd = document.querySelectorAll('#serverTable tbody tr td');
    expect(newTd.length).toEqual(2);
    expect(newTd[0].innerText).toEqual('Alice');
    expect(newTd[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});