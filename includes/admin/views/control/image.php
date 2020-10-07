<div class="control image-control control-inline-style"
     data-control-type="<?php echo esc_attr( $control_key ); ?>"
     data-option-key="<?php echo esc_attr( $option_key ); ?>">
    <div class="control-label">
        <span class="label-text">
            <?php echo $label; ?>

            <?php if ( $required ): ?>
                <abbr class="required" title="<?php echo __( 'required', 'wcpf' ); ?>">*</abbr>
            <?php endif; ?>
        </span>

        <?php if ( $control_description ): ?>
            <div class="control-description">
                <span class="text"><?php echo $control_description; ?></span>
            </div>
        <?php endif; ?>
    </div>
    <div class="control-content">
        <div class="control-image-container">
            <div class="image-container hidden">
                <img src="" class="image-element"/>
                <div class="delete-image"></div>
            </div>
            <div class="upload-container">
                <span class="empty-text"><?php echo __( 'No image selected', 'wcpf' ); ?> </span>
                <button class="button upload-image">
                    <span class="text"><?php echo __( 'Add Image', 'wcpf' ); ?></span>
                </button>
            </div>
        </div>
        <input type="hidden" class="control-input-element" name="<?php echo esc_attr( $option_key ); ?>">
    </div>
</div>