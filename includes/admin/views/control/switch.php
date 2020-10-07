<div class="control switch-control control-inline-style"
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
        <div class="control-input-container">
            <label class="switch-label">
                <input type="checkbox" class="switch control-element" name="<?php echo esc_attr( $option_key ); ?>">
                <span class="switch-element">
                    <span class="first-option-text"><?php echo $first_option['text']; ?></span>
                    <span class="second-option-text"><?php echo $second_option['text']; ?></span>
                    <span class="switch-slider"></span>
                </span>
            </label>
        </div>
        <div class="validation-errors-container"></div>
    </div>
</div>