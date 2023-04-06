const displaySection = document.querySelector('.contentBox')




if (displaySection)
    displaySection.innerHTML = `<div class="row">
    <div class="col-12 text-center mb-3">
        <h2 class="display-2"> Finance Logger</h2>
    </div>
</div>
<div class="row justify-content-between">
    <div class="col-lg-4 border border-2 p-4">
        <form class="addFinanceLog">
            <div class="form-outline mb-4">
                <label class="form-label">Type</label>
                <select id="type" class="form-select">
                    <option value="invoice">invoice</option>
                    <option value="payment">payment</option>
                </select>
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">To/From</label>
                <input type="text" id="toFrom" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">Details</label>
                <input type="text" id="details" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">Amount</label>
                <input type="number" id="amount" class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4" id="submitBtn">Add</button>
        </form>
    </div>
    <div class="col-lg-7 my-3 my-lg-0 border border-2 p-4 listDisplay">
        <div class="row">
            <div class="col-3">
                <h3>Logs</h3>
            </div>

        </div>
        <hr>
        <div class="row listBody">
            <div class="col">
                <ul class="logList">
                </ul>
            </div>
        </div>
    </div>
</div>` 