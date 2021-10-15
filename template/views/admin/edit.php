
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="saveForm_<?=$id?>" action="<?=$fn?>?page=admin&save" method="post">
                <input form="saveForm_<?=$id?>" type="hidden" name="oldCountID" value="<?=$id?>">
                <div class="form-group">
                    <label for="name" class="col-form-label">name:</label>
                    <input form="saveForm_<?=$id?>" type="text" name="name" class="form-control" id="name" value="<?=$id?>">
                </div>
                <div class="form-group">
                    <label for="time" class="col-form-label">time:</label>
                    <input form="saveForm_<?=$id?>" type="text" name="time" class="form-control" id="time" value="<?=date('d-m-Y H:i:s', $data['lastTime'])?>">
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">users:</label>
                    <textarea form="saveForm_<?=$id?>" name="find" class="form-control" id="users" rows="5"><?=implode("\n", $data['find'])?></textarea>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">count:</label>
                    <input form="saveForm_<?=$id?>" type="text" name="counts" class="form-control" id="counts" value="<?=$data['counts']?>">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button form="saveForm_<?=$id?>" type="submit" class="btn btn-primary">
                Save changes
            </button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
            </button>
        </div>
    </div>
</div>

<script>
$(function(){
	form_submit_ajax("saveForm_<?=$id?>");
});
</script>
